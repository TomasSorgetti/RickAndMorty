const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const favorites = sequelize.define(
    "favorites",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      idChar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "favorites",
    }
  );
  return favorites;
};
