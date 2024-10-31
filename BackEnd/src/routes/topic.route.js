const express = require("express");
const router = express.Router();
const {
  getTopics,
  createTopic,
  getTopicById,
  updateTopic,
  deleteTopic,
  likeTopic,
  dislikeTopic,
  commentTopic,
} = require("../controllers/topic.controller");

// Admin routes

// Protected routes
router.get("/", getTopics);
router.get("/:id", getTopicById);

router.put("/:id", updateTopic);
router.delete("/:id", deleteTopic);
router.post("/", createTopic);
router.put("/:id/like", likeTopic);
router.put("/:id/dislike", dislikeTopic);
router.put("/:id/comment", commentTopic);

// Public routes

module.exports = router;
