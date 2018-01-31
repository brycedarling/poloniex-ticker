import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Ticker from './components/Ticker';

const App = () => (
  <Provider store={configureStore()}>
    <Ticker />
  </Provider>
);

export default App;
