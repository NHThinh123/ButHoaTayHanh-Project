const express = require("express");
const router = express.Router();
const {
  getCharacter,
  createCharacter,
} = require("../controllers/character.controller");

router.get("/", getCharacter);
router.post("/", createCharacter);
module.exports = router;
