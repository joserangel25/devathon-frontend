import { setIsLoading, setErrors, setIsCreated } from './authSlice';
import axios from 'axios';

export const submitRegister = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await axios.post('http://localhost:3000/', form);
      if (data) dispatch(setIsCreated());
      setTimeout(() => dispatch(setIsCreated()), 1000);
      dispatch(setIsLoading()); // is loading  to false
    } catch (error) {
      const { response } = error;
      dispatch(setErrors(response)); // set errors
    }
  };
};
