import { BiCurrentLocation } from 'react-icons/bi';
import { useMapStore } from '../../hooks/useMapStore';
import { usePlacesStore } from '../../hooks/usePlacesStore';

export const ButtonLocationUser = () => {
  const { map } = useMapStore();
  const { userLocation } = usePlacesStore();

  const handleClick = () => {
    const { lat, lng } = userLocation;
    const currentLocation = new window.google.maps.LatLng(lat, lng);
    map.panTo(currentLocation);
    map.setZoom(14);
  };
  return (
    <button
      className='fixed right-[8px] bottom-[75px] z-10 bg-blue-500 py-2 px-3 rounded-md shadow hover:bg-blue-700 transition-colors'
      onClick={handleClick}
    >
      <BiCurrentLocation className='text-white' size={20} />
    </button>
  );
};
