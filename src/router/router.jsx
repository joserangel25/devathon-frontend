import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../app/router/AppRouters';

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <AppRoutes />,
  },
]);
