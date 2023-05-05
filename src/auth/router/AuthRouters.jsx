import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import RegisterPage from '../pages/RegisterPage/';
import { LoginPage } from '../pages/LoginPage';

export const AuthRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
      <Route path='/*' element={<Navigate to='/auth/register' />} />
    </Routes>
  );
};
