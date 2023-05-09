import { configureStore } from '@reduxjs/toolkit';
import { feedbackSlice } from './feedback/feedbackslice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    feedback: feedbackSlice.reducer,
    auth: authSlice.reducer,
  },
});
