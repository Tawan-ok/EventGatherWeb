import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/eventSlice';
import { RootState, AppDispatch } from '../store';
import { Button, CircularProgress, Typography, Card, CardContent } from '@mui/material';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { events, loading, error } = useSelector((state: RootState) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Events List
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.href = '/create-event'}
      >
        Create Event
      </Button>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      <div style={{ marginTop: '20px' }}>
        {events.map((event) => (
          <Card key={event.id} style={{ marginBottom: '10px' }}>
            <CardContent>
              <Typography variant="h6">{event.name}</Typography>
              <Typography>Date: {event.date}</Typography>
              <Typography>Location: {event.location}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
