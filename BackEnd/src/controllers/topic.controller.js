const {
  createTopicService,
  getTopicsService,
  getTopicByIdService,
  updateTopicService,
  deleteTopicService,
  likeTopicService,
  dislikeTopicService,
  commentTopicService,
} = require("../services/topic.service");

const getTopics = async (req, res) => {
  const data = await getTopicsService(req.query);
  return res.status(200).json(data);
};
const createTopic = async (req, res) => {
  const data = await createTopicService(req.body, req.file);
  return res.status(200).json(data);
};
const getTopicById = async (req, res) => {
  const data = await getTopicByIdService(req.params.id);
  return res.status(200).json(data);
};
const updateTopic = async (req, res) => {
  const updateData = req.body;
  const data = await updateTopicService(req.params.id, updateData);
  return res.status(200).json(data);
};
const deleteTopic = async (req, res) => {
  const data = await deleteTopicService(req.params.id);
  return res.status(200).json(data);
};
const likeTopic = async (req, res) => {
  const data = await likeTopicService(req.params.id, req.user.id);
  return res.status(200).json(data);
};
const dislikeTopic = async (req, res) => {
  const data = await dislikeTopicService(req.params.id, req.user.id);
  return res.status(200).json(data);
};
const commentTopic = async (req, res) => {
  const data = await commentTopicService(req.params.id, req.body);
  return res.status(200).json(data);
};
module.exports = {
  getTopics,
  createTopic,
  getTopicById,
  updateTopic,
  deleteTopic,
  likeTopic,
  dislikeTopic,
  commentTopic,
};
