import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const participantsPath = path.resolve('db', 'participants.json');

const updateParticipants = participants =>
  fs.writeFile(participantsPath, JSON.stringify(participants, null, 2));

export const getAllParticipants = async () => {
  const data = await fs.readFile(participantsPath, 'utf-8');
  return JSON.parse(data);
};

export const getParticipantsById = async id => {
  const participants = await getAllParticipants();
  const result = participants.find(item => item.id === id);
  return result || null;
};

export const addParticipants = async data => {
  const participants = await getAllParticipants();
  const newParticipant = {
    id: nanoid(),
    ...data,
  };
  participants.push(newParticipant);
  await updateParticipants(participants);
  return newParticipant;
};

// export const addParticipant = async data => {
//   const newParticipant = {
//     id: nanoid(),
//     ...data,
//   };
//   await newParticipant.save();
//   return newParticipant;
// };
