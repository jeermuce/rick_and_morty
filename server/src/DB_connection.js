require("dotenv").config();
const { Sequelize } = require("sequelize");
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SSL_ENABLED } = process.env;

const sequelize = new Sequelize(
	`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
	{
		logging: false,
		native: false,
		dialectOptions: { ssl: SSL_ENABLED === "true" }, // Evaluates the environment variable SSL_ENABLED to a boolean
	},
);
console.log("Authenticating to database...");

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
FavoriteModel(sequelize);
UserModel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {
	through: "user_favorite",
	timestamps: false,
});
Favorite.belongsToMany(User, {
	through: "user_favorite",
	timestamps: false,
});
module.exports = {
	User,
	Favorite,
	conn: sequelize,
};
