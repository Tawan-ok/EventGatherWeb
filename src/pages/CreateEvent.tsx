import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { createEvent } from '../store/eventSlice';

const CreateEvent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    const newEvent = { title, description, location, date, time };
    dispatch(createEvent(newEvent));
    alert('Event created successfully!');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create Event
      </Typography>
      <TextField fullWidth label="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField fullWidth label="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField fullWidth label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <TextField fullWidth label="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <TextField fullWidth label="Time" value={time} onChange={(e) => setTime(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default CreateEvent;
