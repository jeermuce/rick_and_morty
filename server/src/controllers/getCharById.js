const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");
function getCharById(req, res) {
  const { id } = req.params;

  axios
    .get(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ status, name, species, origin, image, gender }) => {
      if (name) {
        const character = { id, status, name, species, origin, image, gender };
        return res.status(200).json(character);
      }
      return res.status(404).send("Not Found");
    })
    .catch((error) => res.status(500).send({ error: error.message }));
  /*     try {
      
    } catch (error) {
      res.status(500).send({error: error.message})
    } */
}

module.exports = { getCharById };
