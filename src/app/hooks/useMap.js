import { Loader } from '@googlemaps/js-api-loader';
import { useLayoutEffect, useRef } from 'react';
import { environment } from '../../settings/environment';
import { useActionsMap } from './useActionsMap';

const mapOptions = {
  center: {
    lat: -9.189967,
    lng: -75.015152,
  },
  controlSize: 25,
  zoom: 6,
};

const loader = new Loader({
  apiKey: environment.API_KEY_MAPS,
});

export const useMap = () => {
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

  return {
    refElement,
  };
};
