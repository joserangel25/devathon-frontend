import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../ui/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';
import { ButtonLocationUser } from '../components/map/ButtonLocationUser';

const Homepage = () => {
  const { deniedLocation } = usePlacesStore();
  useActionsPlaces();

  return (
    <>
      <MapView />
      {deniedLocation && <ErrorAccessLocation />}
      <ButtonLocationUser />
    </>
  );
};

export default Homepage;
