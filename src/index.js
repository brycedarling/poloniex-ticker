import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, rootEl);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    ReactDOM.render(<NextApp />, rootEl);
  });
}

registerServiceWorker();
