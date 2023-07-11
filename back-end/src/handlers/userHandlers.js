
//*************create user and login***************//

const postUserHandler = (req, res) => {
    const { name, lastname, email } = req.body
    
    res.status(200).send(`post user name: ${name}, lastname: ${lastname}, email: ${email}`);
}
 


//************* get users and user by id **************//

const getUsersHandler = (req, res) => {
    res.status(200).send(`get user handler`);
    
};
const getUserByIdHandler = (req, res) => {
    const { id } = req.params
    
  res.status(200).send(`get user with id: ${id}`);
};






module.exports = {
  postUserHandler,
  getUsersHandler,
  getUserByIdHandler,
};