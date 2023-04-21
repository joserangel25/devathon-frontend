import { useDispatch } from 'react-redux';
import { setDeniedLocation, setUserLocation } from '../../store/places/placesSlice';
import { useGeolocation } from './useGeolocation';
import { useEffect } from 'react';

export const useActionsPlaces = () => {
  const dispatch = useDispatch();
  const { coordinatesUser, acceptedPermissions } = useGeolocation();

  useEffect(() => {
    if (!acceptedPermissions) return doDeniedUserLocation();
    doSetUserLocation(coordinatesUser);
  }, [acceptedPermissions]);

  const doSetUserLocation = (coordsUser) => {
    dispatch(setUserLocation(coordsUser));
  };

  const doDeniedUserLocation = () => {
    dispatch(setDeniedLocation());
  };

  // return {};
};
