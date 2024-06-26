import Participant from '../models/Participant.js';

import HttpError from '../helpers/HttpError.js';

import { ctrlWrapper } from '../decorators/index.js';

const getAll = async (req, res, next) => {
  const result = await Participant.find();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { eventId } = req.params;
  const result = await Participant.find({ eventId });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const result = await Participant.create(req.body);
  res.status(201).json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
};
