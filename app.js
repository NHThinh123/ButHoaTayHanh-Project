const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const ApiError = require("./app/api-error");
const route = require("./app/routes/index.route");

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

route(app);

app.use((req, res, next) => {
  return next(new ApiError(404, "không tìm thấy trang web này"));
});

app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Lỗi server" });
});

module.exports = app;
