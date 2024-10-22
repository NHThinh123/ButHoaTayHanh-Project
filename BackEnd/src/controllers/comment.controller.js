const {
  createCommentService,
  getCommentsService,
  getCommentByIdService,
  updateCommentService,
  deleteCommentService,
} = require("../services/comment.service");

const getComments = async (req, res) => {
  const data = await getCommentsService(req.query);
  return res.status(200).json(data);
};
const createComment = async (req, res) => {
  const data = await createCommentService(req.body);
  return res.status(200).json(data);
};
const getCommentById = async (req, res) => {
  const data = await getCommentByIdService(req.params.id);
  return res.status(200).json(data);
};
const updateComment = async (req, res) => {
  const updateData = req.body;
  const data = await updateCommentService(req.params.id, updateData);
  return res.status(200).json(data);
};
const deleteComment = async (req, res) => {
  const data = await deleteCommentService(req.params.id);
  return res.status(200).json(data);
};

module.exports = {
  getComments,
  createComment,
  getCommentById,
  updateComment,
  deleteComment,
};
