import { useSelector, useDispatch } from 'react-redux';
import { ModalSide } from '../Modal-Side';
import { setIsDetailActive } from '../../../store/detail/detailsSlice';

export const Detail = () => {
  const { isDetailActive, name } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const toggleIsDetailActive = () => {
    dispatch(setIsDetailActive());
  };
  return (
    <>
      {isDetailActive && (
        <ModalSide title={name} toggleActive={toggleIsDetailActive}>
          <h2>holaaa</h2>
        </ModalSide>
      )}
    </>
  );
};
