import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const eventsPath = path.resolve('db', 'events.json');

const updateEvents = events =>
  fs.writeFile(eventsPath, JSON.stringify(events, null, 2));

export const getAllEvents = async () => {
  const data = await fs.readFile(eventsPath, 'utf-8');
  return JSON.parse(data);
};

export const getEventById = async id => {
  const events = await getAllEvents();
  const result = events.find(item => item.id === id);
  return result || null;
};

export const addEvent = async data => {
  const events = await getAllEvents();
  const newEvent = {
    id: nanoid(),
    ...data,
  };
  events.push(newEvent);
  await updateEvents(events);
  return newEvent;
};
