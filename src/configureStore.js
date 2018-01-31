import { createStore, applyMiddleware, compose } from 'redux';
import { Connection } from 'autobahn';
import reduxAutobahn from 'redux-autobahn-js';
import reducers from './reducers';

const configureStore = (initialState = {}) => {
  const enhancers = [];

  const connection = new Connection({
    url: 'wss://api.poloniex.com/',
    realm: 'realm1',
  });
connection.onopen = (session, details) => {
  console.log('conn opened', session, details);
};
connection.onclose = (session, details) => {
  console.log('conn closed', session, details);
};

  const middleware = [
    reduxAutobahn.middleware(connection)
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const store = createStore(
    reducers,
    initialState,
    composedEnhancers,
  );

  return store;
};

export default configureStore;
