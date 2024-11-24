require("dotenv").config();
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  // Danh sách các đường dẫn không yêu cầu xác thực
  const white_lists = [
    "/user/login",
    "/user/register",
    "/topic",
    "/comment",
    "/character",
    "/effect",
    "/character/:id",
  ];

  // Danh sách các đường dẫn bị chặn (blacklist)
  const black_lists = ["/admin/secret", "/user/blocked"];

  // Hàm kiểm tra đường dẫn hiện tại với danh sách
  const isListed = (url, list) => {
    return list.some((item) => {
      if (item.includes(":")) {
        // Xử lý dynamic route
        const regex = new RegExp(
          `^${item.replace(/:\w+/g, "[^/]+")}$` // Thay :param bằng regex
        );
        return regex.test(url);
      }
      return item === url;
    });
  };

  const currentUrl = req.originalUrl.split("?")[0].replace("/api", "");

  // Kiểm tra nếu đường dẫn nằm trong blacklist
  if (isListed(currentUrl, black_lists)) {
    return res.status(403).json({
      message: "Bạn không có quyền truy cập đường dẫn này.",
    });
  }

  // Kiểm tra nếu đường dẫn nằm trong whitelist
  if (isListed(currentUrl, white_lists)) {
    return next();
  }

  // Kiểm tra phương thức HTTP
  if (req.method !== "GET") {
    if (!req?.headers?.authorization) {
      return res.status(401).json({
        message: "Bạn cần đăng nhập để thực hiện hành động này.",
      });
    }

    const token = req.headers.authorization.split(" ")[1];

    // Xác minh token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = {
        id: decoded.id,
        email: decoded.email,
        username: decoded.username,
        role: decoded.role,
      };
      console.log(decoded);
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Token không hợp lệ hoặc hết hạn.",
      });
    }
  } else {
    next();
  }
};

module.exports = authentication;
