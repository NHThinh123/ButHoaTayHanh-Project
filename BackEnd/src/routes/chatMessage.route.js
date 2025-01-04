const express = require("express");
const { getChatResponse } = require("../controllers/chatMessage.controller");

const router = express.Router();

router.post("/response", getChatResponse);

module.exports = router;
