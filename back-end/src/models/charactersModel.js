const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const characters = sequelize.define(
    "characters",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.TEXT,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "characters",
    }
  );
  characters.belongsTo(sequelize.models.user, { foreignKey: "userId" });

  return characters;
};
