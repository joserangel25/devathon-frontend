import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../ui/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';
import { useSelector } from 'react-redux';
import { useToggle } from '../../hooks/useToggle';
import { ButtonLocationUser } from '../components/map/ButtonLocationUser';
import Feedback from '../components/Feedback';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';
import { ModalIntroduction } from '../components/ModalIntroduction';

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
      <ButtonLocationUser />
      {modalIntroduction && <ModalIntroduction toggleModalIntroduction={toggleModalIntroduction} />}
      <Feedback />
    </>
  );
};

export default Homepage;
