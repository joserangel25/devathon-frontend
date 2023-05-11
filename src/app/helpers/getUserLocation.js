export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ lat: coords.latitude, lng: coords.longitude });
      },
      (error) => {
        reject(error.message);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};
