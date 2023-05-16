import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../ui/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';
import { ButtonLocationUser } from '../components/map/ButtonLocationUser';
import Feedback from '../components/Feedback';
import { Header } from '../components/Header';

const Homepage = () => {
  const { deniedLocation } = usePlacesStore();
  useActionsPlaces();

  return (
    <>
      <Header />
      <MapView />
      {deniedLocation && <ErrorAccessLocation />}
      <ButtonLocationUser />
      <Feedback />
    </>
  );
};

export default Homepage;
