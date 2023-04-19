import { configureStore } from '@reduxjs/toolkit';
import { mapSlice } from './map/mapSlice';

export const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
