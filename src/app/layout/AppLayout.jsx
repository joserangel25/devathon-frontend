import { Outlet } from 'react-router-dom';
import Feedback from '../components/Feedback';

export const AppLayout = () => {
  return (
    <div>
      <h2 className='text-orange-500'>Welcome to places accessibility project</h2>
      <Outlet />
      <Feedback />
    </div>
  );
};
