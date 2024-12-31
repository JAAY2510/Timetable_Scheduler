const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  capacity: Number,
});

module.exports = mongoose.model('Room', roomSchema);