import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../ui/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';
import { ButtonLocationUser } from '../components/map/ButtonLocationUser';
import Feedback from '../components/Feedback';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';
import { Edit } from '../components/Edit';

const Homepage = () => {
  const { deniedLocation } = usePlacesStore();

  useActionsPlaces();

  return (
    <>
      <Header />
      <Filter />
      <MapView />
      {deniedLocation && <ErrorAccessLocation />}
      <Edit />
      <ButtonLocationUser />
      <Feedback />
    </>
  );
};

export default Homepage;
