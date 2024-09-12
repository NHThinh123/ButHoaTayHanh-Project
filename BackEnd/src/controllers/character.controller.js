const { createCharacterService } = require("../services/character.service");

const getCharacter = async (req, res) => {
  return res.status(200).json("Get characters");
};
const createCharacter = async (req, res) => {
  const data = await createCharacterService(req.body);
  return res.status(200).json(data);
};
module.exports = {
  getCharacter,
  createCharacter,
};
