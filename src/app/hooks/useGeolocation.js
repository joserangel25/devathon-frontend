import { useEffect, useState } from 'react';
import { getUserLocation } from '../helpers/getUserLocation';

export const useGeolocation = () => {
  const [acceptedPermissions, setAcceptedPermissions] = useState(false);
  const [coordinatesUser, setCoordinatesUser] = useState(null); // {lat: 0, lng: 0}}

  const handleAccepted = (coords) => {
    setCoordinatesUser(coords);
    setAcceptedPermissions(true);
  };

  const handleDenied = () => {
    setCoordinatesUser(null);
    setAcceptedPermissions(false);
  };

  // first useEffect for request permissions locations to the user
  useEffect(() => {
    const getLocation = async () => {
      try {
        const coords = await getUserLocation();
        handleAccepted(coords);
      } catch (error) {
        handleDenied();
      }
    };
    getLocation();
  }, []);

  // listener when user change to permissions
  useEffect(() => {
    const onChangeGeolocation = async () => {
      try {
        const coords = await getUserLocation();
        handleAccepted(coords);
      } catch (error) {
        handleDenied();
      }
    };

    const permisionsQuery = async () => {
      try {
        const permissionsStatus = await navigator.permissions.query({ name: 'geolocation' });
        permissionsStatus.addEventListener('change', onChangeGeolocation);
      } catch (error) {
        handleDenied();
      }
    };
    permisionsQuery();

    return () => {
      window.addEventListener('change', onChangeGeolocation);
    };
  }, []);

  return {
    coordinatesUser,
    acceptedPermissions,
  };
};
