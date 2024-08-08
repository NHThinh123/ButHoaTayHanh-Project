const { createUserService } = require("../services/user.service");

const getUser = async (req, res) => {
  return res.status(200).json("Get user");
};
const createUser = async (req, res) => {
  const { userName, password, role } = req.body;
  const data = await createUserService(userName, password, role);
  return res.status(200).json(data);
};
module.exports = {
  getUser,
  createUser,
};
