const Post = require("./../Model/post");

async function home(_, res) {
  res.status(200).json({ message: "Hello here " });
}
async function postPost(req, res) {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    console.log(savedPost);
    res.send(savedPost);
  } catch (error) {
    return res.status(409).json({ message: `${error}` });
  }
}
async function getPost(req, res) {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  home,
  getPost,
  postPost,
};
