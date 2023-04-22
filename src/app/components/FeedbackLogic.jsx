import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { restart } from '../../store/feedback/feedbackslice';
import { useDispatch } from 'react-redux';

export const FeedbackLogic = () => {
  const [active, toggleActive] = useModal(false);
  const [view, setView] = useState('recommend');
  const dispatch = useDispatch();
  const changeView = (value) => {
    setView(value);
  };
  const closeView = () => {
    toggleActive();
    changeView('recommend');
    dispatch(restart());
  };

  return {
    closeView,
    changeView,
    toggleActive,
    active,
    view,
  };
};
