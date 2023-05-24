import { setIsLoading } from './detailsSlice';

export const getDetail = (placeId) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading());
      //   const resp = await fetch(`http://localhost:3000/place_id=${placeId}`);
      //   console.log(resp);
    } catch (err) {
      console.log(err);
      dispatch(setIsLoading());
    }
  };
};
