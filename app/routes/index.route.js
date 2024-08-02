const charactersRouter = require("./characters.route");

function route(app) {
  app.use("/characters", charactersRouter);

  app.get("/", (req, res) => {
    res.send("Chào thế giới!!!!!");
  });
}
module.exports = route;
