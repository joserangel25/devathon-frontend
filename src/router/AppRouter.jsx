import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '../app/pages/HomePage';
import RegisterPage from '../auth/pages/RegisterPage';
import LoginPage from '../auth/pages/LoginPage/Index';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
