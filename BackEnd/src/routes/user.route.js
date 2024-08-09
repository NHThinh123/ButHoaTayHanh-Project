const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  handleLogin,
} = require("../controllers/user.controller");

router.get("/", getUser);
router.post("/register", createUser);
router.post("/login", handleLogin);
module.exports = router;
