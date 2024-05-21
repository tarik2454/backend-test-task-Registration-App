import * as participantsServices from '../services/participantsServices.js';

import HttpError from '../helpers/HttpError.js';

import { ctrlWrapper } from '../decorators/index.js';

const getAll = async (req, res, next) => {
  const result = await participantsServices.getAllParticipants();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await participantsServices.getParticipantsById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const result = await participantsServices.addParticipants(req.body);
  res.status(201).json(result);
};

// const add = async (req, res, next) => {
//   const result = await participantsServices.addParticipant(req.body);
//   res.status(201).json(result);
// };

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
};
