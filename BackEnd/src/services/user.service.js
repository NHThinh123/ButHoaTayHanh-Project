const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/user");
const createUserService = async (userName, password, role) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let result = await User.create({
      userName: userName,
      password: hashedPassword,
      role: role,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  createUserService,
};
