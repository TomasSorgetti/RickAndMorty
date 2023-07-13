const { user } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const {refreshToken}=require("../jsw")
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
      // const refresh = await refreshToken(userVerification.id);
      return { token, id: userVerification.id };
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



//***************** GET ********************//
const getUserById = async (id) => {
  // const publicKey = fs.readFileSync("public.pem", "utf8");
  // console.log("publicKey", publicKey);

  // const decoded = jwt.verify(token, publicKey);

  return await user.findOne({ where: { id } }); 

};




module.exports = {
  postUser,
  getUserById,
  loginUser,
};
