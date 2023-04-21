import { configureStore } from '@reduxjs/toolkit';
import { mapSlice } from './map/mapSlice';
import { placesSlice } from './places/placesSlice';

export const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    places: placesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
