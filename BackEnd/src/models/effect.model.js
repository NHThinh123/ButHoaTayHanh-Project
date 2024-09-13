const mongoose = require("mongoose");

const effectSchema = new mongoose.Schema({
  nameEffect: { type: String, required: true },
  descriptionEffect: { type: String, required: true },
  colorEffect: { type: String },
});

const Effect = mongoose.model("Effect", effectSchema);
module.exports = Effect;
