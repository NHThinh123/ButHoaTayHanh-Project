const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: String,
  story: String,
  image: String,
  skills: [
    {
      title: String,
      content: String,
    },
  ],
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
