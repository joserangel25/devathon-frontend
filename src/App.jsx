import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  );
}

export default App;
