import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../ui/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';
import { ButtonLocationUser } from '../components/map/ButtonLocationUser';
import Feedback from '../components/Feedback';

const Homepage = () => {
  const { deniedLocation } = usePlacesStore();
  useActionsPlaces();

  return (
    <>
      <MapView />
      {deniedLocation && <ErrorAccessLocation />}
      <ButtonLocationUser />
      <Feedback />
    </>
  );
};

export default Homepage;
