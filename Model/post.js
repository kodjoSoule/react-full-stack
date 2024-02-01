const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  postdate: { type: Date },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
