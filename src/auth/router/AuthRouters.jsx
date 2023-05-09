import { Navigate, Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage/';
import Login from '../../app/pages/Login';
import LoginPage from '../pages/LoginPage/Index.jsx';

export const AuthRouters = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<Navigate to='/login' />} />
    </Routes>
  );
};
