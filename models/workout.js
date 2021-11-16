const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
  totalDuration: {
    type: Number,
  }
});

const Workouts = mongoose.model('Workouts', WorkoutSchema);

module.exports = Workouts;