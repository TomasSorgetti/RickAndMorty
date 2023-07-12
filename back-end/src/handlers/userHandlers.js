const {
  postUser,
  getUserById,
  loginUser,
} = require("../controllers/userControllers");

//*************create user and login***************//
const userLoginHandler = async (req, res) => {
  const { name, password } = req.body

  try {
    const response = await loginUser(name, password)
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const postUserHandler = async(req, res) => {
    const { name, password, image } = req.body
  try {
    const response = await postUser(name, password, image)
    res.status(200).json(response);
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}
 


//************* get users and user by id **************//

const getUsersHandler = (req, res) => {
    res.status(200).send(`get user handler`);
    
};


const getUserByIdHandler = async(req, res) => {
    const { id } = req.params
    try {
      const response = await getUserById(id)
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};






module.exports = {
  postUserHandler,
  getUsersHandler,
  getUserByIdHandler,
  userLoginHandler,
};