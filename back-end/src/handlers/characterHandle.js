const {createChar} = require("../controllers/characterController");

const postCharacter = async (req, res) => {
  const { name, image, species, gender, status } = req.body;
  try {
    const response = await createChar(name, image, species, gender, status);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCharacters = async (req, res) => {
  console.log("tu vieja GET");
};

module.exports = {
  postCharacter,
  getCharacters,
};
