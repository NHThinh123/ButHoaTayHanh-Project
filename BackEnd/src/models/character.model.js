const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  mainSkill: { type: String, required: true },
  subSkill: [{ type: String }],
  cooldown: { type: Number, default: 0 },
  effectSkill: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Effect",
    },
  ],
});

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rarity: {
    type: String,
    required: true,
    enum: ["R", "SR", "SSR"],
  },
  faction: {
    type: String,
    required: true,
    enum: ["Tiên giới", "Nhân giới", "Yêu giới", "Thánh giới", "Ma giới"],
  },
  role: {
    type: String,
    required: true,
    enum: ["Sát thủ", "Đấu sĩ", "Hỗ trợ", "Hồi máu", "Mưu sĩ", "Đỡ đòn"],
  },
  story: { type: String, default: "" },
  PvpScore: { type: Number, min: 0, max: 5, default: 0 },
  PveScore: { type: Number, min: 0, max: 5, default: 0 },
  image: { type: String, default: "default.png" },
  skills: [skillSchema],
});
characterSchema.index({ name: 1, rarity: 1 });
const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
