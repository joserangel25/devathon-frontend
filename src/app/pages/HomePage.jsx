import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../components/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';

const Homepage = () => {
  const { deniedLocation } = usePlacesStore();
  useActionsPlaces();

  return (
    <>
      <MapView />
      {deniedLocation && <ErrorAccessLocation />}
    </>
  );
};

export default Homepage;
