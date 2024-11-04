const Comment = require("../models/comment.model");
const Topic = require("../models/topic.model");
const User = require("../models/user.model");

const getCommentsService = async (query) => {
  const { topicId, sort, limit, page = 1, search } = query;
  const filter = {};
  if (topicId) filter.topic = topicId;
  if (search) filter.name = { $regex: search, $options: "i" };

  const sortOption = { createdAt: -1 };
  if (sort) {
    const [field, order] = sort.split(":");
    sortOption[field] = order === "desc" ? -1 : 1;
  }
  try {
    let result = await Comment.find(filter)
      .sort(sortOption)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
      .populate("author", "-password");

    const total = await Comment.countDocuments(filter);

    return {
      result,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
const createCommentService = async (data) => {
  try {
    let result = await Comment.create(data);
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
const likeCommentService = async (commentId, userId) => {
  try {
    const comment = await Comment.findById(commentId);

    if (!comment) return null;
    //kiểm tra topic có bị dislike không, nếu có sẽ xóa
    const dislikeIndex = comment.dislikes.indexOf(userId);
    if (dislikeIndex !== -1) {
      comment.dislikes.splice(dislikeIndex, 1);
    }

    //kiểm tra topic có like hay chưa, nếu có thì xóa, nếu chưa thì thêm
    const likeIndex = comment.likes.indexOf(userId);
    if (likeIndex !== -1) {
      comment.likes.splice(likeIndex, 1);
    } else {
      comment.likes.push(userId);
    }

    const updatedComment = await comment.save();
    const populatedComment = await Comment.findById(updatedComment._id);
    return populatedComment;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const dislikeCommentService = async (commentId, userId) => {
  try {
    const comment = await Comment.findById(commentId);

    if (!comment) return null;

    //kiểm tra topic có bị dislike không, nếu có sẽ xóa
    const likeIndex = comment.likes.indexOf(userId);

    if (likeIndex !== -1) {
      comment.likes.splice(likeIndex, 1);
    }
    //kiểm tra topic có like hay chưa, nếu có thì xóa, nếu chưa thì thêm
    const dislikeIndex = comment.dislikes.indexOf(userId);

    if (dislikeIndex !== -1) {
      comment.dislikes.splice(dislikeIndex, 1);
    } else {
      comment.dislikes.push(userId);
    }
    const updatedComment = await comment.save();

    const populatedComment = await Comment.findById(updatedComment._id);
    return populatedComment;
  } catch (error) {
    console.error(error);
    return null;
  }
};
module.exports = {
  getCommentsService,
  createCommentService,
  getCommentByIdService,
  updateCommentService,
  deleteCommentService,
  likeCommentService,
  dislikeCommentService,
};
