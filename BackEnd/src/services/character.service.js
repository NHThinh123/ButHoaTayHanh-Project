const Character = require("../models/character.model");
const cloudinary = require("../config/cloudinary");

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
const updateCharacterService = async (id, updateData, fileData) => {
  try {
    let updatedCharacterData = { ...updateData };

    // Lấy thông tin nhân vật hiện tại
    const currentCharacter = await Character.findById(id);

    // Nếu có file mới, xóa ảnh cũ trên Cloudinary
    if (fileData) {
      const imageUrl = fileData.path;

      // Kiểm tra và xóa ảnh cũ
      if (currentCharacter?.image) {
        const publicId = currentCharacter.image
          .split("/character-img/")[1] // Lấy phần sau "character-img/"
          .split(".")[0]; // Loại bỏ phần đuôi file (ví dụ: .jpg)
        await cloudinary.uploader.destroy(`character-img/${publicId}`);
      }

      updatedCharacterData = {
        ...updateData,
        image: imageUrl,
      };
    }

    const result = await Character.findByIdAndUpdate(id, updatedCharacterData, {
      new: true, // Trả về tài liệu đã cập nhật
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
    // Lấy thông tin nhân vật trước khi xóa
    const character = await Character.findById(id);

    // Xóa ảnh trên Cloudinary
    if (character?.image) {
      const publicId = character.image
        .split("/character-img/")[1] // Lấy phần sau "character-img/"
        .split(".")[0]; // Loại bỏ phần đuôi file (ví dụ: .jpg)
      await cloudinary.uploader.destroy(`character-img/${publicId}`);
    }

    // Xóa nhân vật trong cơ sở dữ liệu
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
