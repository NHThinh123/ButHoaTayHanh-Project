const express = require("express");
const router = express.Router();
const {
  getTopics,
  createTopic,
  getTopicById,
  updateTopic,
  deleteTopic,
} = require("../controllers/topic.controller");

router.put("/:id", updateTopic);
router.delete("/:id", deleteTopic);
router.get("/:id", getTopicById);
router.get("/", getTopics);
router.post("/", createTopic);

module.exports = router;
