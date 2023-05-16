import { setResults, setIsLoading } from './searchSlice';
import axios from 'axios';

export const getResults = (searchObject) => {
  return async (dispatch) => {
    dispatch(setIsLoading()); // is loading to true
    dispatch(setResults([])); // set to default for every new request
    try {
      // this is temporaly xd
      const { data } = await axios.get(
        `http://localhost:3000/search?lat=${searchObject.lat}&lng=${searchObject.lng}&query=${
          searchObject.query
        }&types=${searchObject.types === '' ? '""' : searchObject.types}`,
      );
      if (data) dispatch(setResults(data.data));
    } catch (error) {
      const { response } = error;
      console.log(response);
    }
    dispatch(setIsLoading()); // is loading  to false
  };
};
