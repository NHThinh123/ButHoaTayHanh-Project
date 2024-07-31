const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Chào thế giới!!!!!");
});

module.exports = app;
