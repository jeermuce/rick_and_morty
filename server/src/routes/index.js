const getCharById = require("../controllers/getCharById");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const router = require("express").Router();

router.get("/char/:param_id", getCharById);
router.get("/user", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
