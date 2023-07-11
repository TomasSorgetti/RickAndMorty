const { Router } = require("express");

const usersRouter = Router();

const {
  postUserHandler,
  getUsersHandler,
  getUserByIdHandler,
} = require("../handlers/userHandlers");


usersRouter.post("/", postUserHandler);

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserByIdHandler);


module.exports = usersRouter;