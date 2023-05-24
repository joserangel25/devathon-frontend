/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { setDeniedLocation, setUserLocation } from '../../store/places/placesSlice';
import { useGeolocation } from './useGeolocation';
import { useEffect } from 'react';
import { getNearbyPlaces } from '../../store/places/thunks';
import { usePlacesStore } from './usePlacesStore';
import { useMapStore } from './useMapStore';
import { isThereIcon } from '../../helpers/filterByIcon';
import { toast } from 'react-hot-toast';

export const useActionsPlaces = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);
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
      const { location, name, wheelchair_accessible_entrance, place_id, types } = place;
      const { lat, lng } = location;

      const urlIcon = isThereIcon(types[0]);

      const urlPath = () => {
        return filter && filter === 'accesible' && wheelchair_accessible_entrance
          ? `/public/assets/icons-map/icon-${urlIcon}-accesible.svg`
          : filter && filter === 'no-accesible' && !wheelchair_accessible_entrance
          ? `/public/assets/icons-map/icon-${urlIcon}-no.svg`
          : `/public/assets/icons-map/icon-${urlIcon}.svg`;
      };

      const urlImg = {
        url: urlPath(),
        scaledSize: new window.google.maps.Size(40, 40),
        labelOrigin: new window.google.maps.Point(90, 20),
        anchor: new window.google.maps.Point(20, 20),
      };

      const latLgn = new window.google.maps.LatLng(lat, lng);
      // eslint-disable-next-line no-unused-vars
      const marker = new window.google.maps.Marker({
        position: latLgn,
        map,
        name,
        icon: urlImg,
        // label: { // this is the name the is teh next to the icon
        //   text: name,
        //   color:
        //     filter && filter === 'accesible' && wheelchair_accessible_entrance
        //       ? `#39AC73`
        //       : filter && filter === 'no-accesible' && !wheelchair_accessible_entrance
        //       ? `#F64C4C`
        //       : `#0052CC`, // adjust the color of the label text
        // },
        place_id,
      });
      marker.addListener('click', (event) => {
        const clickedPlaceId = marker.place_id;
        console.log(marker, clickedPlaceId);
        toast(`${marker.name}`);
      });
    });
  };

  return {
    doGetNearbyPlaces,
    doPrintNearbyPlaces,
  };
};
