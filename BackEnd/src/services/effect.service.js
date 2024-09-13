const Effect = require("../models/effect.model");

const getEffectsService = async () => {
  try {
    let result = await Effect.find();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const createEffectService = async (effectData) => {
  try {
    let result = await Effect.create(effectData);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const getEffectByIdService = async (id) => {
  try {
    let result = await Effect.findById(id);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const updateEffectService = async (id, updateData) => {
  try {
    let result = await Effect.findByIdAndUpdate(id, updateData, { new: true });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const deleteEffectService = async (id) => {
  try {
    let result = await Effect.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
module.exports = {
  getEffectsService,
  createEffectService,
  getEffectByIdService,
  updateEffectService,
  deleteEffectService,
};
