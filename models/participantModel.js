import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
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
    type: String,
    required: true,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
});

const Participant = mongoose.model('Participant', participantSchema);
export default Participant;
