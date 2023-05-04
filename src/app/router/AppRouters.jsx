import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { AppLayout } from '../layout/AppLayout';
import Login from '../pages/Login';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='home' element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<h2>Registrate</h2>} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
