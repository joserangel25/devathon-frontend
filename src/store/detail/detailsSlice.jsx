import { createSlice } from '@reduxjs/toolkit';

const base = {
  isDetailActive: false, // toggle the modal
  name: '', // place's name
  comments: [],
  details: null,
  isLoading: false,
};

export const detailSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setIsDetailActive(state) {
      state.isDetailActive = !state.isDetailActive;
    },
    setName(state, { payload }) {
      state.name = payload;
    },
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setIsDetailActive, setName, setIsLoading } = detailSlice.actions;
