const { user } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ADMIN_PASSWORD, ADMIN_NAME, SECRET } = process.env;



//**************** Login *****************//

const loginUser = async (name, password) => {
  const userVerification = await user.findOne({ where: { name } });
  if (userVerification) {
    const match = await bcrypt.compare(password, userVerification.password);
    if (match) {
      const token = jwt.sign({ id: user.id, name: user.name }, SECRET, {
        expiresIn: "1m",
      });
      return ({ token, id: user.id });
    }
  }
}



//**************** Create ****************//
const postUser = async (name, password) => {
  if (name === ADMIN_NAME && password === ADMIN_PASSWORD) {
    const res = await user.create({ name, password, role: "admin" });
    const { password: userPassword, ...userWithoutPassword } = res.toJSON();
    return userWithoutPassword;
  }
  const res = await user.create({ name, password });
  const { password: userPassword, ...userWithoutPassword } = res.toJSON();
  return userWithoutPassword;
};
// const postUser = async (name, password, image) => {
//   try {
//     const hash = await bcrypt.hash(password, saltRounds);
//     console.log(hash);
//     return await user.create({ name, hash, image });
//   } catch (error) {
//     throw error
//   }
// };

//***************** GET ********************//
const getUserById = async (id) => {
  return await user.findOne({ where: { id: id } });
};

module.exports = {
  postUser,
  getUserById,
  loginUser,
};
