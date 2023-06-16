const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");
async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);
    if (!data.name)
      throw new Error(`Missing character data of character ${id}`);
    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    return res.status(200).json(character);
  } catch (error) {
    error.message.includes("ID")
      ? res.status(404).send({ error: error.message })
      : res.status(500).send({ error: error.response.data.error });
  }
}

module.exports = { getCharById };
