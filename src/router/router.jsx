import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../app/router/AppRouters';
import { AuthRouters } from '../auth/router/AuthRouters';

export const router = createBrowserRouter([
  {
    path: '/auth/*',
    element: <AuthRouters />,
  },
  {
    path: '/*',
    element: <AppRoutes />,
  },
]);
