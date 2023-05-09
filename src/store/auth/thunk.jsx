import { setIsLoading, setErrors, setIsCreated, setUser, setLogued } from './authSlice';
import LugarAccesibleApi from '../../api/LugarAccesibleApi';

export const submitRegister = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.post('users/register', form);
      if (data) dispatch(setIsCreated());
      setTimeout(() => dispatch(setIsCreated()), 1000);
      dispatch(setIsLoading()); // is loading  to false
    } catch (error) {
      const { response } = error;
      dispatch(setErrors(response)); // set errors
    }
  };
};

export const submitLogin = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.post('users/login', form);
      if (data) {
        sessionStorage.setItem('jwt', data.accessToken);
        dispatch(setUser(data));
        dispatch(setLogued());
      }
    } catch (error) {
      const { response } = error;
      dispatch(setErrors(response)); // set errors
    } finally {
      dispatch(setIsLoading());
    }
  };
};
