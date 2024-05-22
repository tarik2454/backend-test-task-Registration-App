import express from 'express';

import participantsControllers from '../controllers/participantsControllers.js';
import { validateBody } from '../decorators/index.js';
import participantSchemas from '../schemas/participantSchemas.js';

const participantsRouter = express.Router();

participantsRouter.get('/', participantsControllers.getAll);

participantsRouter.get('/:id', participantsControllers.getById);

participantsRouter.post(
  '/',
  // validateBody(participantSchemas),
  participantsControllers.add
);

// router.post('/', participantsControllers.add);

export default participantsRouter;
