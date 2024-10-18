const express = require("express");
const router = express.Router();
const {
  getTopics,
  createTopic,
  getTopicById,
  updateTopic,
  deleteTopic,
} = require("../controllers/topic.controller");

// Admin routes

// Protected routes
router.get("/", getTopics);
router.get("/:id", getTopicById);

router.put("/:id", updateTopic);
router.delete("/:id", deleteTopic);
router.post("/", createTopic);

// Public routes

module.exports = router;
