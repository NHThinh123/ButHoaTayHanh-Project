const Comment = require("../models/comment.model");

const getCommentsService = async (query) => {
  const { topicId, sort, limit, page = 1, search } = query;
  const filter = {};
  if (topicId) filter.topic = topicId;
  if (search) filter.name = { $regex: search, $options: "i" };

  const sortOption = {};
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
module.exports = {
  getCommentsService,
  createCommentService,
  getCommentByIdService,
  updateCommentService,
  deleteCommentService,
};
