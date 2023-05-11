import { configureStore } from '@reduxjs/toolkit';
import { mapSlice } from './map/mapSlice';
import { placesSlice } from './places/placesSlice';
import { feedbackSlice } from './feedback/feedbackslice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    places: placesSlice.reducer,
    feedback: feedbackSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
