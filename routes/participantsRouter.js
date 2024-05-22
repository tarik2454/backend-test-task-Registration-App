import express from 'express';

import participantsControllers from '../controllers/participantsControllers.js';
import { validateBody } from '../decorators/index.js';
import createParticipantSchema from '../schemas/participantSchemas.js';

const participantsRouter = express.Router();

participantsRouter.get('/', participantsControllers.getAll);

// participantsRouter.get('/:id', participantsControllers.getById);

participantsRouter.post(
  '/',
  validateBody(createParticipantSchema),
  participantsControllers.add
);

export default participantsRouter;
