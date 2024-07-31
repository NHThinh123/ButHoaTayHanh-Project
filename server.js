const app = require("./app");
const config = require("./app/config/index");

const PORT = config.app.port;
//run server
app.listen(PORT, () => {
  console.log(`App listening on a port ${PORT}`);
});
