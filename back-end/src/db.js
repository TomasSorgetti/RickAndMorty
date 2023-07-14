require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const userModel = require("./models/userModel");
const favoritesModel = require("./models/favoritesModel");
const characterModel = require("./models/charactersModel")

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

userModel(sequelize)
favoritesModel(sequelize)
characterModel(sequelize);

const { user, favorites, characters } = sequelize.models;

user.hasMany(favorites)
favorites.hasMany(user)

user.hasMany(characters)
characters.hasMany(user)

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}