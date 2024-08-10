const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  handleLogin,
  getAccount,
} = require("../controllers/user.controller");

router.post("/register", createUser);
router.post("/login", handleLogin);
router.get("/account", getAccount);
router.get("/", getUser);

module.exports = router;
