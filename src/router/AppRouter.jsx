import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRouters } from '../app/router/AppRouters';
import { AuthRouters } from '../auth/router/AuthRouters';
import { PrivateRoutes } from './PrivateRouters';
import { PublicRoutes } from './PublicRouters';
import Homepage from '../app/pages/HomePage';
import RegisterPage from '../auth/pages/RegisterPage';
import LoginPage from '../auth/pages/LoginPage/Index';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
