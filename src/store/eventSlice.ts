import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

interface EventState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  events: [],
  loading: false,
  error: null,
};

// Thunk สำหรับ get-all event
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get('http://localhost:8080/events/get-all');
  return response.data;
});

// Thunk สำหรับ create event
export const createEvent = createAsyncThunk('events/createEvent', async (eventData: Partial<Event>) => {
  const response = await axios.post('http://localhost:8080/events', eventData);
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
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.events.push(action.payload); // เพิ่ม Event ใหม่เข้ามา
      });
  },
});

export default eventSlice.reducer;
