import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  // for see the app without login uses !user ? children <Navigate to='/'/>
  return user ? children : <Navigate to='/' />;
};
