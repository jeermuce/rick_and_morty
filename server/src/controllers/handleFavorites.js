let myFavorites = [];

function postFav(req, res) {
  try {
    const character = req.body;
    const characterFound = myFavorites.find((fav) => fav.id === character.id);
    if (characterFound) throw new Error("Character already in favorites");
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
function deleteFav(req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((fav) => fav.id !== +id);
  return res.status(200).json(myFavorites);
}
module.exports = { postFav, deleteFav };
