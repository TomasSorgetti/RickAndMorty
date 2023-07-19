const {
  createChar,
  findAllCharacters,
  deletChar,
} = require("../controllers/characterController");

const postCharacter = async (req, res) => {
  const {id, name, image, species, gender, status, userId } = req.body;
  try {
    const response = await createChar(
      id,
      name,
      image,
      species,
      gender,
      status,
      userId
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCharacters = async (req, res) => {
  const { userId } = req.params
    try {
        const response = await findAllCharacters(userId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 }

const deleteCharacter = async (req, res) => {
  const { id, userId } = req.params;
    try {
        if (id && userId) {
          await deletChar(id, userId);
        }
        res.status(200).json({message:"character deleted"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
  postCharacter,
  getCharacters,
  deleteCharacter,
};
