import { useSelector, useDispatch } from 'react-redux';
import { useToggle } from '../../../../hooks/useToggle';
import { setIsModalActive, setView, setLogOut } from '../../../../store/auth/authSlice';

export const UserLogic = () => {
  const { user } = useSelector((state) => state.auth);
  const [userOptions, toggleUserOptions] = useToggle(false);
  const dispatch = useDispatch();

  const closeUserSession = () => {
    dispatch(setLogOut());
  };

  const toggleModalActive = () => {
    dispatch(setIsModalActive());
  };

  const changeView = (value) => {
    dispatch(setView(value));
  };

  return {
    user,
    userOptions,
    toggleUserOptions,
    closeUserSession,
    toggleModalActive,
    changeView,
  };
};
