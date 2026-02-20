// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nom: '',
  email: '',
  telephone: '',
  filiere: '',
  groupe: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => initialState,
  },
});

export const { updateField, resetForm } = formSlice.actions;
export const selectFormData = (state) => state.form;
export default formSlice.reducer;
