import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'mapSlice',
  initialState: {
    isLoading: true,
    map: null,
  },
  reducers: {
    setMap: (state, { payload }) => {
      state.isLoading = false;
      state.map = payload;
    },
  },
});
export const { setMap } = mapSlice.actions;
