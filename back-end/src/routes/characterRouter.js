const { Router } = require("express");
const characterRouter = Router();
const {
  postCharacter,
  getCharacters,
  deleteCharacter,
} = require("../handlers/characterHandle");

characterRouter.post("/createChar", postCharacter)


characterRouter.get("/getChar/:userId", getCharacters);


characterRouter.delete("/deleteChar/:id/:userId",deleteCharacter)


module.exports = characterRouter;
