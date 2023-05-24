import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../ui/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';
import { useSelector } from 'react-redux';
import { useToggle } from '../../hooks/useToggle';
import Feedback from '../components/Feedback';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';
import { Edit } from '../components/Edit';
import { ModalIntroduction } from '../components/ModalIntroduction';
import { Detail } from '../components/Detail';

const Homepage = () => {
  const { deniedLocation } = usePlacesStore();
  const { isActive } = useSelector((state) => state.guide);
  const [modalIntroduction, toggleModalIntroduction] = useToggle(isActive);
  useActionsPlaces();

  return (
    <>
      <Header />
      <Filter />
      <MapView />
      {deniedLocation && <ErrorAccessLocation />}
      <Edit />
      <Detail />
      {modalIntroduction && <ModalIntroduction toggleModalIntroduction={toggleModalIntroduction} />}
      <Feedback />
    </>
  );
};

export default Homepage;
