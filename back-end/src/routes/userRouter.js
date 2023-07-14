const { Router } = require("express");
const {verifyAccessToken} = require("../middlewares/auth");

const usersRouter = Router();

const {
  postUserHandler,
  getUserByIdHandler,
  userLoginHandler,
} = require("../handlers/userHandlers");

usersRouter.post("/", postUserHandler);
usersRouter.post("/login", userLoginHandler);

usersRouter.get("/detail/", verifyAccessToken, getUserByIdHandler);

module.exports = usersRouter;
