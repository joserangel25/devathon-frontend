import { useDispatch } from 'react-redux';
import { setMap } from '../../store/map/mapSlice';

export const useActionsMap = () => {
  const dispatch = useDispatch();

  const doSetMap = (map) => {
    dispatch(setMap(map));
  };

  return {
    doSetMap,
  };
};
