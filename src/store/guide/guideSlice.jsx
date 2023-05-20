import { createSlice } from '@reduxjs/toolkit';

const isSave =
  localStorage.getItem('saveAnswer') !== null
    ? JSON.parse(localStorage.getItem('saveAnswer'))
    : true;

const base = {
  isActive: isSave,
};

export const guideSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setIsActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { setIsFirst, setIsActive } = guideSlice.actions;
