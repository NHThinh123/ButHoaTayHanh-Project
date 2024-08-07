require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const characterRoutes = require("./routes/characters.route");
const connection = require("./config/database");
const { getHomepage } = require("./controllers/characters.controller");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 8888;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

const webAPI = express.Router();
webAPI.get("/", getHomepage);

app.use("/", webAPI);
app.use("/api", characterRoutes);

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
