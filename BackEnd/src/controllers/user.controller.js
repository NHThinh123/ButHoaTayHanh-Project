const {
  createUserService,
  loginService,
  getUserService,
} = require("../services/user.service");

const createUser = async (req, res) => {
  const { email, password, role } = req.body;
  const data = await createUserService(email, password, role);
  return res.status(200).json(data);
};
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService(email, password);
  return res.status(200).json(data);
};
const getUser = async (req, res) => {
  const data = await getUserService();
  return res.status(200).json(data);
};

const getAccount = async (req, res) => {
  return res.status(200).json(req.user);
};
const createPayment = async (req, res) => {
  const data = await createPaymentService();
  return res.status(200).json(data);
};
module.exports = {
  getUser,
  createUser,
  handleLogin,
  getAccount,
  createPayment,
};
