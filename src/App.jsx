import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <Toaster />
    </Provider>
  );
}

export default App;
