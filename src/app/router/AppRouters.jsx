import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { AppLayout } from '../layout/AppLayout';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
