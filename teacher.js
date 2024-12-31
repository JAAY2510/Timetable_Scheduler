const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: String,
});

module.exports = mongoose.model('Teacher', teacherSchema);