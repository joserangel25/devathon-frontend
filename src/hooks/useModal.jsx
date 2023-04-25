import { useState } from 'react';

export const useModal = (initialState) => {
  const [active, setActive] = useState(initialState);

  const toggleActive = () => {
    setActive(!active);
  };

  return [active, toggleActive];
};
