import { useMap } from '../../hooks/useMap';

export const MapView = () => {
  const { refElement } = useMap();

  return <div ref={refElement} className='fixed inset-0 w-screen h-screen'></div>;
};
