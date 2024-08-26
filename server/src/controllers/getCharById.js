const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");
async function getCharById(req, res) {
	try {
		const { param_id } = req.params;
		const { data } = await axios.get(`${URL}/${param_id}`);
		const { id, status, name, species, origin, image, gender } = data;
		if (!data.name)
			throw new Error(`Missing character data of character ${id}`);
		const character = {
			id,
			status,
			name,
			species,
			origin,
			image,
			gender,
		};

		return res.status(200).json(character);
	} catch (error) {
		error.message.includes("ID")
			? res.status(404).send({ error: error.message })
			: res.status(500).send({ error: error.response.data.error });
	}
}

module.exports = getCharById;
