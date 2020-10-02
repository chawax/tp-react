import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NotFoundPage from './containers/NotFoundPage';
import PandasListPage from './containers/PandasListPage';
import { store } from './redux/store';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <header>
        <h1>My pandas</h1>
      </header>
      <BrowserRouter>
        <Route path="/" component={PandasListPage} exact />
        <Route component={NotFoundPage} />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
