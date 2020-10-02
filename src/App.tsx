import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PandasListPage from './containers/PandasListPage';
import { store } from './redux/store';

import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PandasListPage />
    </Provider>
  </ThemeProvider>
);

export default App;
