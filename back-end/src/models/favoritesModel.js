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
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "favorites",
    }
  );
  return favorites;
};
