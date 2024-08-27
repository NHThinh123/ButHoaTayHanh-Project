const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  handleLogin,
  getAccount,
  createPayment,
} = require("../controllers/user.controller");

router.post("/register", createUser);
router.post("/login", handleLogin);
router.get("/account", getAccount);
router.get("/create_payment", createPayment);
router.get("/", getUsers);

module.exports = router;
