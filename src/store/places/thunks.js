import { toast } from 'react-hot-toast';
import { setNearbyPlaces } from './placesSlice';

export const getNearbyPlaces = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch('/mock/placesMock.json');
      const nearbyPlaces = await resp.json();
      dispatch(setNearbyPlaces(nearbyPlaces.results));
    } catch (error) {
      console.log(error);
      toast.error(`ERROR al cargar los lugares cercanos`, {
        position: 'top-right',
      });
    }
  };
};
