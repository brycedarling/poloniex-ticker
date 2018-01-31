import { combineReducers } from 'redux';
import reduxAutobahn from 'redux-autobahn-js';
import ticker from './ticker';

export default combineReducers({
  autobahn: reduxAutobahn.reducer,
  ticker,
});
