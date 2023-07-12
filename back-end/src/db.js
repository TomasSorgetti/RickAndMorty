require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const userModel = require("./models/userModel");
const favoritesModel = require("./models/favoritesModel");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

userModel(sequelize)
favoritesModel(sequelize)

const { user, favorites } = sequelize.models;

user.hasMany(favorites)
favorites.hasMany(user)



module.exports = {
    ...sequelize.models,
    conn: sequelize,
}