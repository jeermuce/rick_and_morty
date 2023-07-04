const { Favorite } = require("../DB_connection");
async function deleteFav(req, res) {
    try {
        const { id } = req.body;
        await Favorite.destroy({ where: { id } });
        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = deleteFav;
