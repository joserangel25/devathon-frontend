import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { environment } from '../../settings/environment';
import { useActionsMap } from './useActionsMap';
import { usePlacesStore } from './usePlacesStore';
import { useMapStore } from './useMapStore';

const mapOptions = {
  controlSize: 40,
  zoom: 8,
  center: {
    lat: -9.189967,
    lng: -75.015152,
  },
  zoomControl: false,
  scaleControl: true,
};

const loader = new Loader({
  apiKey: environment.API_KEY_MAPS,
});

export const useMap = () => {
  const { userLocation } = usePlacesStore();
  const { deniedLocation } = usePlacesStore();
  const { map, isLoading } = useMapStore();
  const { doSetMap } = useActionsMap();
  const refElement = useRef(null);

  useLayoutEffect(() => {
    const createMap = async () => {
      try {
        const google = await loader.load();
        const map = new google.maps.Map(refElement.current, mapOptions);
        doSetMap(map);
      } catch (error) {
        console.log(error);
      }
    };
    createMap();
  }, []);

  useEffect(() => {
    // when the map is ready create a maker user
    if (!isLoading) {
      const infoMarker = new window.google.maps.InfoWindow({
        content: 'Estas aquí',
      });

      const marker = new window.google.maps.Marker({
        position: userLocation,
        map,
      });

      marker.addListener('click', () => {
        infoMarker.open({
          anchor: marker,
          map,
        });
      });
    }
  }, [userLocation, isLoading]);

  useEffect(() => {
    if (isLoading || !userLocation || !map || deniedLocation) return;

    const { lat, lng } = userLocation;
    const newCenter = new window.google.maps.LatLng(lat, lng);
    map.setCenter(newCenter);
  }, [isLoading, map, userLocation, deniedLocation]);

  return {
    refElement,
  };
};
