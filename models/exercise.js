const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    validate: [({ length }) => length < 35, 'Type name too long.'],
  },
  name: {
    type: String,
    trim: true,
    // Ensures the user doesn't input a string that's way too long
    validate: [({ length }) => length < 75, 'Type name too long.'],
  },
  duration: {
    type: Number,
    // Makes sure the input is a number
    match: [/^[\d]$/, 'Must be a number.'],
  },
  distance: {
    type: Number,
    match: [/^[\d]$/, 'Must be a number.'],
  },
  weight: {
    type: Number,
    match: [/^[\d]$/, 'Must be a number.'],
  },
  reps: {
    type: Number,
    match: [/^[\d]$/, 'Must be a number.'],
  },
  sets: {
    type: Number,
    match: [/^[\d]$/, 'Must be a number.'],
  },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;