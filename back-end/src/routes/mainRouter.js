const { Router } = require("express");
const usersRouter = require("./userRouter")
const characterRouter = require("./characterRouter")
const postsRouter = require("./postsRouter");

const router = Router();

router.use("/users", usersRouter)
router.use("/character", characterRouter);
router.use("/posts", postsRouter);

module.exports = router;