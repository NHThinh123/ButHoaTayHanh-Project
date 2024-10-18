const {
  createTopicService,
  getTopicsService,
  getTopicByIdService,
  updateTopicService,
  deleteTopicService,
} = require("../services/topic.service");

const getTopics = async (req, res) => {
  const data = await getTopicsService(req.query);
  return res.status(200).json(data);
};
const createTopic = async (req, res) => {
  const data = await createTopicService(req.body);
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

module.exports = {
  getTopics,
  createTopic,
  getTopicById,
  updateTopic,
  deleteTopic,
};
