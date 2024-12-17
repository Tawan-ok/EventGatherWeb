import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

type EventCardProps = {
  title: string;
  description: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, description }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Join Event
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
