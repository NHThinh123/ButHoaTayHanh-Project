const {
  createCharacterService,
  getAllCharactersService,
  getCharacterByIdService,
  updateCharacterService,
  deleteCharacterService,
} = require("../services/character.service");

const createCharacter = async (req, res) => {
  const data = await createCharacterService(req.body, req.file);
  return res.status(200).json(data);
  // return res.status(200).json(fileData);
};
const getAllCharacters = async (req, res) => {
  const data = await getAllCharactersService(req.query);
  return res.status(200).json(data);
};
const getCharacterById = async (req, res) => {
  const data = await getCharacterByIdService(req.params.id);
  return res.status(200).json(data);
};
const updateCharacter = async (req, res) => {
  const data = await updateCharacterService(req.params.id, req.body, req.file);
  return res.status(200).json(data);
};
const deleteCharacter = async (req, res) => {
  const data = await deleteCharacterService(req.params.id);
  return res.status(200).json(data);
};

module.exports = {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
};
