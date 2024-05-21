import express from 'express';

import participantsControllers from '../controllers/participantsControllers.js';
import validateBody from '../decorators/validateBody.js';
import participantsSchemas from '../schemas/participantsSchemas.js';

const participantsRouter = express.Router();

participantsRouter.get('/', participantsControllers.getAll);

participantsRouter.get('/:id', participantsControllers.getById);

participantsRouter.post(
  '/',
  // validateBody(participantsSchemas),
  participantsControllers.add
);

// router.post('/', participantsControllers.add);

export default participantsRouter;
