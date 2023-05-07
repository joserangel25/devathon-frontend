import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div>
      <h2 className='text-orange-500'>Welcome to places accessibility project</h2>
      <Outlet />
    </div>
  );
};
