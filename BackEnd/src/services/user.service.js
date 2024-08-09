const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/user.model");
const createUserService = async (email, password, role) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let result = await User.create({
      email: email,
      password: hashedPassword,
      role: role,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        return "create access token";
      } else {
        return {
          EC: 2,
          EM: "Email/password không hợp lệ",
        };
      }
    } else {
      return {
        EC: 1,
        EM: "Email/password không hợp lệ",
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  createUserService,
  loginService,
};
