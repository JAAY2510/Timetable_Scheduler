import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimetableComponent = () => {
  const [timetable, setTimetable] = useState(null);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const response = await axios.get('/api/timetable');
        setTimetable(response.data);
      } catch (error) {
        console.error('Error fetching timetable:', error);
      }
    };

    fetchTimetable();
  }, []);

  if (!timetable) {
    return <div>Loading timetable...</div>;
  }

  return (
    <div>
      <h2>Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Time Slot</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>