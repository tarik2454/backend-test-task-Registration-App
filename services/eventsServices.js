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

// export const updateMovieById = async (id, data) => {
//   const movies = await getAllMovies();
//   const index = movies.findIndex(item => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   movies[index] = { id, ...data };
//   await updateMovies(movies);
//   return movies[index];
// };

// export const deleteById = async id => {
//   const movies = await getAllMovies();
//   const index = movies.findIndex(item => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   const [result] = movies.splice(index, 1);
//   // const result = movies.splice(index, 1)[0];
//   await updateMovies(movies);
//   return result;
// };
