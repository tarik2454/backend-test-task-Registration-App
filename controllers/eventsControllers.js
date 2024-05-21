import * as eventsServices from '../services/eventsServices.js';

import HttpError from '../helpers/HttpError.js';

import { ctrlWrapper } from '../decorators/index.js';

const getAll = async (req, res, next) => {
  const result = await eventsServices.getAllEvents();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await eventsServices.getEventById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
