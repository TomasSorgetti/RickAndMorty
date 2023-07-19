require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const userModel = require("./models/userModel");
const charactersModel = require("./models/charactersModel")
const postsModel = require("./models/postsModel")

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

userModel(sequelize)
charactersModel(sequelize);
postsModel(sequelize);

const { user, characters, posts } = sequelize.models;

user.hasMany(characters)
characters.hasMany(user)

user.hasMany(posts)
posts.belongsTo(user)

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}