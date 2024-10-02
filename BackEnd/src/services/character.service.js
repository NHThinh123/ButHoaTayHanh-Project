const Character = require("../models/character.model");
const cloudinary = require("../config/cloudinary");

const createCharacterService = async (characterData, fileData) => {
  try {
    const imageUrl = fileData?.path;
    const updatedCharacterData = {
      ...characterData,
      image: imageUrl,
    };

    let result = await Character.create(updatedCharacterData);
    return result;
  } catch (error) {
    if (fileData) cloudinary.uploader.destroy(fileData.filename);
    console.error(error);
    return null;
  }
};

const getAllCharactersService = async (query) => {
  const { role, rarity, faction, sort, limit = 10, page = 1, search } = query;
  const filter = {};
  if (search) filter.name = { $regex: search, $options: "i" };
  if (faction) filter.faction = faction;
  if (role) filter.role = role;
  if (rarity) filter.rarity = rarity;

  const sortOption = {};
  if (sort) {
    const [field, order] = sort.split(":");
    sortOption[field] = order === "desc" ? -1 : 1;
  }
  const result = await Character.find(filter)
    .sort(sortOption)
    .limit(Number(limit))
    .skip((Number(page) - 1) * Number(limit))
    .populate({
      path: "skills",
      populate: "effectSkill",
    });
  const total = await Character.countDocuments(filter);
  return {
    result,
    totalPages: Math.ceil(total / Number(limit)),
    currentPage: Number(page),
  };
};
const getCharacterByIdService = async (id) => {
  try {
    const result = Character.findById(id).populate({
      path: "skills",
      populate: {
        path: "effectSkill",
        model: "Effect",
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const updateCharacterService = async (id, updateData) => {
  try {
    const result = await Character.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).populate({
      path: "skills",
      populate: {
        path: "effectSkill",
        model: "Effect",
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const deleteCharacterService = async (id) => {
  try {
    const result = await Character.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  createCharacterService,
  getAllCharactersService,
  getCharacterByIdService,
  updateCharacterService,
  deleteCharacterService,
};
