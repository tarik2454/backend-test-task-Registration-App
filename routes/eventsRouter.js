import express from 'express';

import eventsControllers from '../controllers/eventsControllers.js';

const eventsRouter = express.Router();

eventsRouter.get('/', eventsControllers.getAll);

// eventsRouter.get('/:id', eventsControllers.getById);

export default eventsRouter;
