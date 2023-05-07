import { setIsLoading, setErrors, setIsCreated } from './authSlice';
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
