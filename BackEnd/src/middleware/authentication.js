require("dotenv").config();
const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
  const white_lists = ["/user/login", "/user/register"];
  if (white_lists.find((item) => "/api" + item === req.originalUrl)) {
    next();
  } else {
    if (req?.headers?.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      //verify
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
          email: decoded.email,
          role: decoded.role,
        };
        console.log(decoded);
        next();
      } catch (error) {
        return res.status(401).json({
          message: "Token không hợp lệ hoặc hết hạn",
        });
      }
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  }
};
module.exports = authentication;
