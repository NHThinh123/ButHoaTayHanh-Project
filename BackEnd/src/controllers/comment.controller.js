const {
  createCommentService,
  getCommentsService,
  getCommentByIdService,
  updateCommentService,
  deleteCommentService,
} = require("../services/comment.service");

const getComments = async (req, res) => {
  const data = await getCommentsService();
  return res.status(200).json(data);
};
const createComment = async (req, res) => {
  const { content, author, topic } = req.body;
  const data = await createCommentService(content, author, topic);
  return res.status(200).json(data);
};
const getCommentById = async (req, res) => {
  const { id } = req.params.id;
  const data = await getCommentByIdService(id);
  return res.status(200).json(data);
};
const updateComment = async (req, res) => {
  const { id } = req.params.id;
  const updateData = req.body;
  const data = await updateCommentService(id, updateData);
  return res.status(200).json(data);
};
const deleteComment = async (req, res) => {
  const { id } = req.params.id;
  const data = await deleteCommentService(id);
  return res.status(200).json(data);
};

module.exports = {
  getComments,
  createComment,
  getCommentById,
  updateComment,
  deleteComment,
};
