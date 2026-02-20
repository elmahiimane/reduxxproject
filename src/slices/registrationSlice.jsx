// registrationSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clubRegistrations: {
    club1: 0, // Initialize as an empty array
    club2: 0,
    club3: 0,
    // Add other clubs if needed
  },
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    incrementRegistration: (state, action) => {
      const { club } = action.payload;
      state.clubRegistrations[club]++;
    },
    // Add other reducers if needed
  },
});

export const { incrementRegistration } = registrationSlice.actions;
export const selectRegistrations = (state) => state.registration.clubRegistrations;

export default registrationSlice.reducer;
