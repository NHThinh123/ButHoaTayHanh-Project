const Character = require("../models/character");
const createCharacterService = async (customCharacter) => {
  //   try {
  //     let result = await CharacterData.create({
  //       name: customCharacter.name,
  //       story: customCharacter.story,
  //       image: customCharacter.image,
  //       skills: customCharacter.skills,
  //     });
  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
};

module.exports = {
  createCharacterService,
};
