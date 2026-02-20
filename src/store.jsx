import { configureStore } from '@reduxjs/toolkit';
import clubInfoReducer from './slices/clubInfoSlice';
import formReducer from './slices/formSlice';
import registrationReducer from './slices/registrationSlice';

const store = configureStore({
  reducer: {
    clubInfo: clubInfoReducer,
    form: formReducer,
    registration: registrationReducer,
  },
});

export default store;
