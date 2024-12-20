const Topic = require("../models/topic.model");
const User = require("../models/user.model");
const Comment = require("../models/comment.model");
const mongoose = require("mongoose");
const getTopicsService = async (query) => {
  const { sort, limit, page = 1, search, filterBy, category, author } = query; // Thêm author vào query
  const filter = {};

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { "content.title": { $regex: search, $options: "i" } },
      { "content.description": { $regex: search, $options: "i" } },
    ];
  }

  if (category) {
    filter.category = category;
  }

  if (author) {
    filter.author = new mongoose.Types.ObjectId(author);
  }

  const sortOption = {};

  if (filterBy) {
    switch (filterBy) {
      case "newest":
        sortOption.uploadAt = -1;
        break;
      case "mostPopular":
        sortOption.popularityScore = -1;
        break;
      case "mostFeatured":
        sortOption.featureScore = -1;
        break;
    }
  }

  if (sort) {
    const [field, order] = sort.split(":");
    sortOption[field] = order === "desc" ? -1 : 1;
  }

  try {
    let topics = await Topic.aggregate([
      {
        $addFields: {
          popularityScore: {
            $subtract: [
              { $add: [{ $size: "$comments" }, { $size: "$likes" }] },
              { $size: "$dislikes" },
            ],
          },
          featureScore: {
            $cond: {
              if: { $eq: [{ $size: "$dislikes" }, 0] },
              then: { $add: [{ $size: "$comments" }, { $size: "$likes" }] },
              else: {
                $divide: [
                  { $add: [{ $size: "$comments" }, { $size: "$likes" }] },
                  { $size: "$dislikes" },
                ],
              },
            },
          },
        },
      },
      { $match: filter },
      { $sort: sortOption },
      { $skip: (Number(page) - 1) * Number(limit) },
      { $limit: Number(limit) },
    ]);

    topics = await Topic.populate(topics, {
      path: "author",
      select: "-password",
    });

    const total = await Topic.countDocuments(filter);
    return {
      result: topics,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const createTopicService = async (topicData, fileData) => {
  try {
    const imageUrl = fileData?.path;
    const updatedTopicData = {
      ...topicData,
      image: imageUrl,
    };
    let result = await Topic.create(updatedTopicData);
    return result;
  } catch (error) {
    if (fileData) cloudinary.uploader.destroy(fileData.filename);
    console.error(error);
    return null;
  }
};
const getTopicByIdService = async (id) => {
  try {
    let result = await Topic.findById(id).populate("author", "-password");

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const updateTopicService = async (id, updateData, fileData) => {
  try {
    let updatedTopicData = { ...updateData };
    // Lấy thông tin nhân vật hiện tại
    const currentTopic = await Topic.findById(id);
    // Nếu có file mới, xóa ảnh cũ trên Cloudinary
    if (fileData) {
      const imageUrl = fileData.path;
      updatedTopicData = {
        ...updateData,
        image: imageUrl,
      };
    }

    const result = await Topic.findByIdAndUpdate(id, updatedTopicData, {
      new: true, // Trả về tài liệu đã cập nhật
      runValidators: true,
    }).populate("author", "-password");

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
    const populatedTopic = await Topic.findById(updatedTopic._id).populate(
      "author",
      "-password"
    );
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
    const populatedTopic = await Topic.findById(updatedTopic._id).populate(
      "author",
      "-password"
    );
    return populatedTopic;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const commentTopicService = async (topicId, commentData) => {
  try {
    const topic = await Topic.findById(topicId);
    if (!topic) return null;
    let comment = await Comment.create(commentData);
    let result = await comment.populate("author", "_id username email avatar");
    topic.comments.push(result._id);
    await topic.save();
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
  likeTopicService,
  dislikeTopicService,
  commentTopicService,
};
