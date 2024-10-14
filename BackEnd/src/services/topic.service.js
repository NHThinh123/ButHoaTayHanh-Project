const Topic = require("../models/topic.model");

const getTopicsService = async (query) => {
  const { sort, limit, page = 1, search } = query;
  const filter = {};
  if (search) filter.name = { $regex: search, $options: "i" };

  const sortOption = {};
  if (sort) {
    const [field, order] = sort.split(":");
    sortOption[field] = order === "desc" ? -1 : 1;
  }

  try {
    let result = await Topic.find(filter)
      .sort(sortOption)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
      .populate("author", "-password");

    const total = await Topic.countDocuments(filter);
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
const createTopicService = async (topicData) => {
  try {
    let result = await Topic.create(topicData);
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
