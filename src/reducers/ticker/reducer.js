import { combineReducers } from 'redux';
//import actionTypes from './actionTypes';

const data = (state = [], action) => {
  console.log('action', action.type);
  return state;
};

const foo = (state = 'bar', action) => {
  return state;
};

const ui = combineReducers({
  foo,
});

export default combineReducers({
  data,
  ui,
});
