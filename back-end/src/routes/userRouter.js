const { Router } = require("express");

const usersRouter = Router();

const {
  postUserHandler,
  getUsersHandler,
  getUserByIdHandler,
  userLoginHandler,
} = require("../handlers/userHandlers");


usersRouter.post("/", postUserHandler);
usersRouter.post("/login", userLoginHandler);

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserByIdHandler);


module.exports = usersRouter;
