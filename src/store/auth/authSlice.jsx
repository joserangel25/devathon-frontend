import { createSlice } from '@reduxjs/toolkit';

const base = {
  user: null,
  isLoading: false,
  errors: null,
  isCreated: false,
  isLogued: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setIsCreated(state) {
      state.isCreated = !state.isCreated;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
    setLogued(state) {
      state.isLogued = !state.isLogued;
    },
    setErrors(state, { payload }) {
      state.errors = payload;
    },
    setLogOut(state) {
      state.user = null;
      state.isLogued = false;
      state.errors = null;
      sessionStorage.removeItem('jwt');
    },
  },
});

export const { setIsLoading, setUser, setErrors, setIsCreated, setLogued, setLogOut } =
  authSlice.actions;
