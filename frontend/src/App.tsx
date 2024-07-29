import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { AppRoutes } from './AppRoutes';
import { theme } from './theme';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <AppRoutes />
      </MantineProvider>
    </Provider>
  );
}
