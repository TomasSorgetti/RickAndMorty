const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const verifyAccessToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("no token detected")
  }
  try {
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
  } catch (error) {
    return res.status(401).send("unauthorized");
  }
  return next()
};


module.exports = {
  verifyAccessToken,
};