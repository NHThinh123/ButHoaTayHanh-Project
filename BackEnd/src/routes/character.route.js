const express = require("express");
const router = express.Router();
const {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/character.controller");

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);

router.post("/", createCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);
module.exports = router;
