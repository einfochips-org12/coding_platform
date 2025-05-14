// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import signupReducer, { loginReducer } from './slices/authSlice';

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login:loginReducer
  },
});

export default store;
