const {
  createTopicService,
  getTopicsService,
  getTopicByIdService,
  updateTopicService,
  deleteTopicService,
} = require("../services/topic.service");

const getTopics = async (req, res) => {
  const data = await getTopicsService();
  return res.status(200).json(data);
};
const createTopic = async (req, res) => {
  const {
    title,
    description,
    image,
    author,
    category,
    status,
    likes,
    dislikes,
    comments,
  } = req.body;
  const data = await createTopicService(
    title,
    description,
    image,
    author,
    category,
    status,
    likes,
    dislikes,
    comments
  );
  return res.status(200).json(data);
};
const getTopicById = async (req, res) => {
  const { id } = req.params.id;
  const data = await getTopicByIdService(id);
  return res.status(200).json(data);
};
const updateTopic = async (req, res) => {
  const { id } = req.params.id;
  const updateData = req.body;
  const data = await updateTopicService(id, updateData);
  return res.status(200).json(data);
};
const deleteTopic = async (req, res) => {
  const { id } = req.params.id;
  const data = await deleteTopicService(id);
  return res.status(200).json(data);
};

module.exports = {
  getTopics,
  createTopic,
  getTopicById,
  updateTopic,
  deleteTopic,
};
