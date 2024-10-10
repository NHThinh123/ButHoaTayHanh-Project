const Topic = require("../models/topic.model");

const getTopicsService = async () => {
  try {
    let result = await Topic.find().populate("author", "-password");
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const createTopicService = async (
  title,
  description,
  image,
  author,
  category,
  status,
  likes,
  dislikes,
  comments
) => {
  try {
    let result = await Topic.create({
      title,
      description,
      image,
      author,
      category,
      status,
      likes,
      dislikes,
      comments,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const getTopicByIdService = async (id) => {
  try {
    let result = await Topic.findById(id)
      .populate("author")
      .populate("comment");
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const updateTopicService = async (id, updateData) => {
  try {
    let result = await Topic.findByIdAndUpdate(id, updateData, { new: true });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const deleteTopicService = async (id) => {
  try {
    let result = await Topic.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
module.exports = {
  getTopicsService,
  createTopicService,
  getTopicByIdService,
  updateTopicService,
  deleteTopicService,
};
