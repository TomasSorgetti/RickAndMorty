const { user } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { ADMIN_PASSWORD, ADMIN_NAME, SECRET } = process.env;

//**************** Login *****************//

const loginUser = async (name, password) => {
  const userVerification = await user.findOne({ where: { name } });
  if (userVerification) {
    const match = await bcrypt.compare(password, userVerification.password);
    if (match) {
      const token = jwt.sign(
        { id: userVerification.id, role: userVerification.role },
        SECRET,
        {
          expiresIn: "1y",
        }
      );
      // const refresh = await refreshToken(userVerification.id);
      return { token, id: userVerification.id, role: userVerification.role };
    }
  }
};

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
  const res = await user.findOne({ where: { id } });
  const { password, role, ...userWithoutSensitiveData } = res.toJSON();

  return userWithoutSensitiveData;
};


module.exports = {
  postUser,
  getUserById,
  loginUser,
};
