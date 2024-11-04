const express = require("express");
const {
  getComments,
  createComment,
  getCommentById,
  updateComment,
  deleteComment,
  likeComment,
  dislikeComment,
} = require("../controllers/comment.controller");
const router = express.Router();

// Admin routes

// Protected routes

router.delete("/:id", deleteComment);
router.put("/:id", updateComment);
router.post("/", createComment);
router.put("/:id/like", likeComment);
router.put("/:id/dislike", dislikeComment);
// Public routes

router.get("/:id", getCommentById);
router.get("/", getComments);

module.exports = router;
