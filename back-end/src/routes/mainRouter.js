const { Router } = require("express");
const usersRouter = require("./userRouter")
const characterRouter = require("./characterRouter")

const router = Router();

router.use("/users", usersRouter)
router.use("/character", characterRouter);

module.exports = router;