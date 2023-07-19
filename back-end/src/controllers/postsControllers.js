const { posts } = require("../db"); 

const createNewPost = async(name, userId, post) => {
    const Post = await posts.create({ name, post })
    Post.setUser(userId)
    return Post
};


const getPosts = async () => {
  return await posts.findAll()
}
const deletePostById = async (id) => {
  const post = await posts.findOne({ where: { id } });
  if (post) {
    return await post.destroy()
  }
  return
};
const updatePostById = async (id) => {
  
};


module.exports = {
  createNewPost,
  getPosts,
  deletePostById,
  updatePostById,
};