import Event from '../models/Event.js';

import HttpError from '../helpers/HttpError.js';

import { ctrlWrapper } from '../decorators/index.js';

const getAll = async (req, res, next) => {
  const result = await Event.find();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Event.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
