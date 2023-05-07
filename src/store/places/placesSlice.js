import { createSlice } from '@reduxjs/toolkit';

export const placesSlice = createSlice({
  name: 'placesSlice',
  initialState: {
    userLocation: null,
    deniedLocation: true,
    nearbyPlaces: [],
  },
  reducers: {
    setUserLocation: (state, { payload }) => {
      state.deniedLocation = false;
      state.userLocation = payload;
    },
    setDeniedLocation: (state) => {
      state.deniedLocation = true;
    },
    setNearbyPlaces: (state, { payload }) => {
      // push new places when this not exists in the storage
      payload.forEach((newPlace) => {
        if (!state.nearbyPlaces.includes(newPlace.place_id)) {
          state.nearbyPlaces.push(newPlace);
        }
      });
    },
  },
});

export const { setUserLocation, setDeniedLocation, setNearbyPlaces } = placesSlice.actions;
