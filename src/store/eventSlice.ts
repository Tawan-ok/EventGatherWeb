import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Interface ของ Event
interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
}

// สร้าง State Interface
interface EventState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

// State เริ่มต้น
const initialState: EventState = {
  events: [],
  loading: false,
  error: null,
};

// สร้าง Thunk สำหรับ Get All Events
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get('http://localhost:8080/events/get-all');
  return response.data;
});

// Event Slice
const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch events';
      });
  },
});

// Export Reducer
export default eventSlice.reducer;
