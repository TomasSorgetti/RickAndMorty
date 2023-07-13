const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const verifyAccessToken = (req, res, next) => {
  if (!req.headers["authorization"])
    return next(res.status(403).send("Unauthorized"));
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err, payload) => {
      if (err) {
          const msg = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message
          return next(createError.Unauthorized(msg))
    }
    req.payload = payload;
    next();
  });
};

const refreshToken = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {}
        const options = {
          expiresIn: "1y",
          issuer: "http://localhost:3000/",
          auddience: userId,
        };
        jwt.sign(payload, SECRET, options, (err, token) => {
            if (err) {
                reject(createError.InternalServerError())
            }
            resolve(token)
        })
    })
}

module.exports = {
  verifyAccessToken,
  refreshToken,
};