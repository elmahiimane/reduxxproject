import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  club1: [],
  club2: [],
  club3: [],
};

const clubInfoSlice = createSlice({
  name: 'clubInfo',
  initialState,
  reducers: {
    updateClubInfo: (state, action) => {
      const { club, data } = action.payload;
      state[club] = data;
    },
  },
});

export const { updateClubInfo } = clubInfoSlice.actions;
export const selectClubInfo = (state) => state.clubInfo;
export default clubInfoSlice.reducer;
