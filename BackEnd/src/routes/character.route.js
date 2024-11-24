const express = require("express");
const router = express.Router();
const uploadCloud = require("../middleware/uploadCloud");
const {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/character.controller");

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);

router.post("/", uploadCloud.single("image"), createCharacter);
router.put("/:id", uploadCloud.single("image"), updateCharacter);
router.delete("/:id", deleteCharacter);
module.exports = router;
