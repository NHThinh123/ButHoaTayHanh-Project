require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const characterRoutes = require("./routes/character.route");
const userRoutes = require("./routes/user.route");
const topicRoutes = require("./routes/topic.route");
const effectRoutes = require("./routes/effect.route");
const commentRoutes = require("./routes/comment.route");
const connection = require("./config/database");

const cors = require("cors");
const delay = require("./middleware/delay");
const authentication = require("./middleware/authentication");
const rateLimitCustom = require("./middleware/rateLimit");

const app = express();
const port = process.env.PORT || 8888;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
app.all("*", authentication);
// app.use(rateLimitCustom);
app.use("/api/character/", characterRoutes);
app.use("/api/user/", userRoutes);
app.use("/api/topic/", topicRoutes);
app.use("/api/effect/", effectRoutes);
app.use("/api/comment/", commentRoutes);

(async () => {
  try {
    await connection();

    app.listen(port, () => {
      console.log(`Backend Nodejs App listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
