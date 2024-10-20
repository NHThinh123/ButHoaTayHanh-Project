const Comment = require("../models/comment.model");

const getCommentsService = async (query) => {
  const { topicId, sort, limit, page, search } = query;
  try {
    let result = await Comment.find().populate("author");
    return result;
  } catch (error) {
    console.error(error);
  }
};
const createCommentService = async (content, author, topic) => {
  try {
    let result = await Comment.create({
      content,
      author,
      topic,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
const getCommentByIdService = async (id) => {
  try {
    let result = await Comment.findById(id).populate("author");

    return result;
  } catch (error) {
    console.error(error);
  }
};
const updateCommentService = async (id, updateData) => {
  try {
    let result = await Comment.findByIdAndUpdate(id, updateData, { new: true });
    return result;
  } catch (error) {
    console.error(error);
  }
};
const deleteCommentService = async (id) => {
  try {
    let result = await Comment.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  getCommentsService,
  createCommentService,
  getCommentByIdService,
  updateCommentService,
  deleteCommentService,
};
