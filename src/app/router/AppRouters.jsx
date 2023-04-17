import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { AppLayout } from '../layout/AppLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='home' element={<HomePage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
