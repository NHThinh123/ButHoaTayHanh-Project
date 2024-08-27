const express = require("express");
const {
  getComments,
  createComment,
  getCommentById,
  updateComment,
  deleteComment,
} = require("../controllers/comment.controller");
const router = express.Router();

router.delete("/:id", deleteComment);
router.put("/:id", updateComment);
router.get("/:id", getCommentById);
router.post("/", createComment);
router.get("/", getComments);
module.exports = router;
