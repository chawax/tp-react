import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NotFoundPage from './containers/NotFoundPage';
import PandaDetailsPage from './containers/PandaDetailsPage';
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
        <Switch>
          <Route path="/" component={PandasListPage} exact />
          <Route path="/pandas/:id" component={PandaDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
