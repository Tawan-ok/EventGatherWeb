import React from 'react';
import { TextField } from '@mui/material';

const SearchBar: React.FC = () => {
  return (
    <TextField
      fullWidth
      label="Search Events"
      variant="outlined"
      margin="normal"
    />
  );
};

export default SearchBar;
