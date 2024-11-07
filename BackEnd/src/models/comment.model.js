const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  repliesWithUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
