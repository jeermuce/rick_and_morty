const { where } = require("sequelize");
const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        if (!origin || !status || !image || !species || !gender || !name || !id)
            return res.status(401).json({ msg: "Missing fields" });
        await Favorite.findOrCreate({
            where: {
                origin,
                status,
                image,
                species,
            },
        });
        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs);
    } catch (error) {
        return;
    }
}

module.exports = postFav;
