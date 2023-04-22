import { configureStore } from '@reduxjs/toolkit';
import { feedbackSlice } from './feedback/feedbackslice';

export const store = configureStore({
  reducer: {
    feedback: feedbackSlice.reducer,
  },
});
