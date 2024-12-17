import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    alert(`Event Created!\nTitle: ${title}\nDescription: ${description}`);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create Event
      </Typography>
      <TextField
        fullWidth
        label="Event Title"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="Event Description"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default CreateEvent;
