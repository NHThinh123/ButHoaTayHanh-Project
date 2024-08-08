const { createCharacterService } = require("../services/character.service");

const getHomepage = async (req, res) => {
  return res.render("sample.ejs");
};
const getCharacter = async (req, res) => {
  return res.status(200).json("Get characters");
};
const createCharacter = async (req, res) => {
  const { name, story, image, skills } = req.body;
  const data = await createCharacterService(name, story, image, skills);
  return res.status(200).json(data);
};
module.exports = {
  getHomepage,
  getCharacter,
  createCharacter,
};
