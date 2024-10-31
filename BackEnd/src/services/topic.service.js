const Topic = require("../models/topic.model");
const User = require("../models/user.model");
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
      .populate("comments");
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
const likeTopicService = async (topicId, userId) => {
  try {
    const topic = await Topic.findById(topicId);
    const user = await User.findById(userId);
    if (!topic) return null;
    //kiểm tra topic có bị dislike không, nếu có sẽ xóa
    const dislikeIndex = topic.dislikes.indexOf(userId);
    const topicDislikeIndex = user.dislikedTopic.indexOf(topicId);
    if (dislikeIndex !== -1) {
      topic.dislikes.splice(dislikeIndex, 1);
      user.dislikedTopic.splice(topicDislikeIndex, 1);
    }
    //kiểm tra topic có like hay chưa, nếu có thì xóa, nếu chưa thì thêm
    const likeIndex = topic.likes.indexOf(userId);
    const topicLikeIndex = user.likedTopic.indexOf(topicId);
    if (likeIndex !== -1) {
      topic.likes.splice(likeIndex, 1);
      user.likedTopic.splice(topicLikeIndex, 1);
    } else {
      topic.likes.push(userId);
      user.likedTopic.push(topicId);
    }
    const updatedTopic = await topic.save();
    const populatedTopic = await Topic.findById(updatedTopic._id)
      .populate("author")
      .populate("comments");
    return populatedTopic;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const dislikeTopicService = async (topicId, userId) => {
  try {
    const topic = await Topic.findById(topicId);
    const user = await User.findById(userId);
    if (!topic) return null;
    //kiểm tra topic có bị dislike không, nếu có sẽ xóa
    const likeIndex = topic.likes.indexOf(userId);
    const topicLikeIndex = user.likedTopic.indexOf(topicId);
    if (likeIndex !== -1) {
      topic.likes.splice(likeIndex, 1);
      user.likedTopic.splice(topicLikeIndex, 1);
    }
    //kiểm tra topic có like hay chưa, nếu có thì xóa, nếu chưa thì thêm
    const dislikeIndex = topic.dislikes.indexOf(userId);
    const topicDislikeIndex = user.dislikedTopic.indexOf(topicId);
    if (dislikeIndex !== -1) {
      topic.dislikes.splice(dislikeIndex, 1);
      user.dislikedTopic.splice(topicDislikeIndex, 1);
    } else {
      topic.dislikes.push(userId);
      user.dislikedTopic.push(topicId);
    }
    const updatedTopic = await topic.save();
    await user.save();
    const populatedTopic = await Topic.findById(updatedTopic._id)
      .populate("author")
      .populate("comments");
    return populatedTopic;
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
  likeTopicService,
  dislikeTopicService,
};
