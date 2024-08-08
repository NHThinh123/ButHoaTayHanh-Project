const Character = require("../models/character");
const createCharacterService = async (name, story, image, skills) => {
  try {
    let result = await Character.create({
      name: name,
      story: story,
      image: image,
      skills: skills,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  createCharacterService,
};
