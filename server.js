const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const roomRoutes = require('./routes/roomRoutes');
const timeSlotRoutes = require('./routes/timeSlotRoutes');
const classRoutes = require('./routes/classRoutes');
const timetableRoutes = require('./routes/timetableRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/courses', courseRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/timeslots', timeSlotRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/timetable', timetableRoutes);

mongoose.connect('mongodb://localhost:27017/timetable-db', { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});