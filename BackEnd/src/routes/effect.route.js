const express = require("express");
const router = express.Router();
const {
  getEffects,
  createEffect,
  getEffectById,
  updateEffect,
  deleteEffect,
} = require("../controllers/effect.controller");

// Admin routes

// Protected routes

router.put("/:id", updateEffect);
router.delete("/:id", deleteEffect);
router.post("/", createEffect);

// Public routes

router.get("/:id", getEffectById);
router.get("/", getEffects);

module.exports = router;
