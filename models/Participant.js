import { Schema, model } from 'mongoose';

import handleSaveError from './hooks.js';

const participantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthDay: {
      type: Date,
      required: true,
    },
    referral: {
      type: [String],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

participantSchema.post('save', handleSaveError);

const Participant = model('participant', participantSchema);

export default Participant;
