const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/user.controller");

router.get("/", getUser);
router.post("/", createUser);
module.exports = router;
