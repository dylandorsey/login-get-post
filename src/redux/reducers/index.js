import { combineReducers } from 'redux';
import login from './loginReducer';
import wall from './wallReducer';

const store = combineReducers({
  login,
  wall,
});

export default store;