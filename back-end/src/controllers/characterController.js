const { characters } = require("../db");

const createChar = async (id,name, image, species, gender, status,userId) => {
  if (id,name && image && species && gender && status && userId) {
    const createCharacter = await characters.create({
      id,
      name,
      image,
      species,
      gender,
      status,
    });

    createCharacter.setUser(userId);

    return createCharacter;
  }
};

const findAllCharacters = async (userId) => {
    return await characters.findAll({where:{userId}});
 }




const deletChar = async (id, userId) => {
  const char = await characters.findOne({ where: { id, userId } });
  if (!char) {
    return;
  }
  return await char.destroy();
};


module.exports = {
  createChar,
  findAllCharacters,
  deletChar,
};
