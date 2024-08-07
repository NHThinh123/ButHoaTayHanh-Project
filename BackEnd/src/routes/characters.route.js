const express = require("express");
const router = express.Router();

// const {
//   getCharacter,
//   postCreateUser,
//   putUpdateCharacter,
//   deleteCharacter,
// } = require("../controllers/characters.controller");

// router.get("/characters", getCharacter);
// router.post("/characters", postCreateUser);
// router.put("/characters", putUpdateCharacter);
// router.delete("/characters", deleteCharacter);
router.get("/", (req, res) => {
  return res.status(200).json("Hello api");
});
module.exports = router;
