import React from 'react';
import { Provider } from 'react-redux';
import PandasListPage from './containers/PandasListPage';
import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <PandasListPage />
  </Provider>
);

export default App;
