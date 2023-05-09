import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRouters } from '../app/router/AppRouters';
import { AuthRouters } from '../auth/router/AuthRouters';
import { PrivateRoutes } from './PrivateRouters';
import { PublicRoutes } from './PublicRouters';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={
            <PublicRoutes>
              <AuthRouters />
            </PublicRoutes>
          }
        />
        <Route
          path='app/*'
          element={
            <PrivateRoutes>
              <AppRouters />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
