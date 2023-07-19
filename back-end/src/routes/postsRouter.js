const { Router } = require("express");
const postsRouter = Router();

const {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
} = require("../handlers/postsHandlers");

postsRouter.post("/", createPost)

postsRouter.get("/", getAllPosts)

postsRouter.delete("/:id", deletePost)

postsRouter.put("/:id", updatePost)

module.exports = postsRouter;