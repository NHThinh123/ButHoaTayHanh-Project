const express = require("express");
const router = express.Router();

const charactersController = require("../controllers/characters.controller");

router.get("/", charactersController.renderAll);

module.exports = router;
