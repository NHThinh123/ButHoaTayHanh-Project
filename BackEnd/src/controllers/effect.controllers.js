const {
  createEffectService,
  getEffectsService,
  getEffectByIdService,
  updateEffectService,
  deleteEffectService,
} = require("../services/effect.service");

const getEffects = async (req, res) => {
  const data = await getEffectsService();
  return res.status(200).json(data);
};
const createEffect = async (req, res) => {
  const data = await createEffectService(req.body);
  return res.status(200).json(data);
};
const getEffectById = async (req, res) => {
  const data = await getEffectByIdService(req.params.id);
  return res.status(200).json(data);
};
const updateEffect = async (req, res) => {
  const updateData = req.body;
  const data = await updateEffectService(req.params.id, updateData);
  return res.status(200).json(data);
};
const deleteEffect = async (req, res) => {
  const data = await deleteEffectService(req.params.id);
  return res.status(200).json(data);
};

module.exports = {
  getEffects,
  createEffect,
  getEffectById,
  updateEffect,
  deleteEffect,
};
