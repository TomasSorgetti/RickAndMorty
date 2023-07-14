const { character } = require("../db");

const createChar = async (name, image, species, gender, status) => {
    if (name, image, species, gender, status) {
        const createCharacter = await character.create({
            name,
            image,
            species,
            gender,
            status,
        })
        return createCharacter;
    }
    
};

module.exports = {
  createChar,
};
