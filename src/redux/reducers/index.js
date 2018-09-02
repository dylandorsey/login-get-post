import { combineReducers } from 'redux';
import login from './loginReducer';

const store = combineReducers({
  login,
});

export default store;