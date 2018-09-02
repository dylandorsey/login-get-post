import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import wallSaga from './wallSaga';
 
export default function* rootSaga() {
  yield all([
    loginSaga(),
    wallSaga(),
  ]);
}
