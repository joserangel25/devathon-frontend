import { createSlice } from '@reduxjs/toolkit';

export const placesSlice = createSlice({
  name: 'placesSlice',
  initialState: {
    userLocation: null,
    deniedLocation: true,
  },
  reducers: {
    setUserLocation: (state, { payload }) => {
      state.deniedLocation = false;
      state.userLocation = payload;
    },
    setDeniedLocation: (state) => {
      state.deniedLocation = true;
    },
  },
});

export const { setUserLocation, setDeniedLocation } = placesSlice.actions;
