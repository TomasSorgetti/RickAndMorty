const {
  createNewPost,
  getPosts,
  deletePostById,
  updatePostById,
} = require("../controllers/postsControllers");


const createPost = async (req, res) => {
    const { name, userId, posts } = req.body;
    const post = posts
    try {
        const response = await createNewPost(name, userId, post);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllPosts = async (req, res) => {
    try {
      const response = await getPosts()
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
 }

const deletePost = async (req, res) => {
    const {id}=req.params
    try {
      const response = await deletePostById(id)
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
const updatePost = async (req, res) => {
    const { post,id } = req.body;
    try {
        const response = await updatePostById(id, post);
        res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};


module.exports = {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
};