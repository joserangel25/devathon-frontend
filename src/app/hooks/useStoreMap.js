import { useSelector } from 'react-redux';

export const useStoreMap = () => {
  const state = useSelector((state) => state.map);
  return {
    ...state,
  };
};
