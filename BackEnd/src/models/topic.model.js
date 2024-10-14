const mongoose = require("mongoose");

const contentItemSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
});

const topicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: [{ type: String, required: true }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    uploadAt: { type: Date, default: Date.now },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    status: {
      type: String,
      required: true,
      enum: ["public", "private", "deleted"],
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Thảo luận",
        "Chiến lược",
        "Sự kiện",
        "Bảo trì",
        "Thông báo",
        "Flex",
        "Khác",
      ],
    },
    content: [contentItemSchema],
  },
  { timestamps: true }
);
const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
