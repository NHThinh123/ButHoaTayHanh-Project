const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  handleLogin,
  getAccount,
  createPayment,
} = require("../controllers/user.controller");

router.post("/register", createUser);
router.post("/login", handleLogin);
router.get("/account", getAccount);
router.get("/create_payment", createPayment);
router.get("/", getUser);

module.exports = router;
