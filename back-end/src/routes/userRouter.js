const { Router } = require("express");
const {verifyAccessToken}=require ("../jsw")


const usersRouter = Router();

const {
  postUserHandler,
  getUserByIdHandler,
  userLoginHandler,
} = require("../handlers/userHandlers");




usersRouter.post("/", postUserHandler);
usersRouter.post("/login", userLoginHandler);


usersRouter.get("/detail/:id", getUserByIdHandler);


module.exports = usersRouter;
