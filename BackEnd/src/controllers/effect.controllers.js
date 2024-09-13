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
  const { id } = req.params.id;
  const data = await getEffectByIdService(id);
  return res.status(200).json(data);
};
const updateEffect = async (req, res) => {
  const { id } = req.params.id;
  const updateData = req.body;
  const data = await updateEffectService(id, updateData);
  return res.status(200).json(data);
};
const deleteEffect = async (req, res) => {
  const { id } = req.params.id;
  const data = await deleteEffectService(id);
  return res.status(200).json(data);
};

module.exports = {
  getEffects,
  createEffect,
  getEffectById,
  updateEffect,
  deleteEffect,
};
