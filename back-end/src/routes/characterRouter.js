const { Router } = require("express");
const characterRouter = Router();
const { postCharacter, getCharacters } = require("../handlers/characterHandle");

characterRouter.post("/createChar", postCharacter)


characterRouter.get("/createChar", getCharacters);



module.exports = characterRouter;
