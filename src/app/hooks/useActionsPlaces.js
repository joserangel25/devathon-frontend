import { useDispatch } from 'react-redux';
import { setDeniedLocation, setUserLocation } from '../../store/places/placesSlice';
import { useGeolocation } from './useGeolocation';
import { useEffect } from 'react';
import { getNearbyPlaces } from '../../store/places/thunks';
import { usePlacesStore } from './usePlacesStore';
import { useMapStore } from './useMapStore';

export const useActionsPlaces = () => {
  const dispatch = useDispatch();
  const { coordinatesUser, acceptedPermissions } = useGeolocation();
  const { nearbyPlaces } = usePlacesStore();
  const { map } = useMapStore();

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

  const doGetNearbyPlaces = () => {
    dispatch(getNearbyPlaces());
  };

  const doPrintNearbyPlaces = () => {
    nearbyPlaces.forEach((place) => {
      const { location } = place;
      const { lat, lng } = location;

      const latLgn = new window.google.maps.LatLng(lat, lng);
      // eslint-disable-next-line no-unused-vars
      const marker = new window.google.maps.Marker({
        position: latLgn,
        map,
        // icon: svgMarker,
      });
    });
  };

  return {
    doGetNearbyPlaces,
    doPrintNearbyPlaces,
  };
};
