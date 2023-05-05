import { createSlice } from '@reduxjs/toolkit';

const base = {
  user: null,
  isLoading: false,
  emailError: '',
  passwordError: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
    setEmailError(state, action) {
      state.emailError = action.payload;
    },
    setPasswordError(state, action) {
      state.passwordError = action.payload;
    },
  },
});

export const { setIsLoading, setUser, setEmailError, setPasswordError } = authSlice.actions;
