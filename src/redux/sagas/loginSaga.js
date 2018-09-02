import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';

function* loginUser(action) {
    try {
        yield put({
            type: LOGIN_ACTIONS.SET_USERNAME_AND_PASSWORD,
            payload: action.payload,
        });
    } catch (error) {
        yield put({
            type: LOGIN_ACTIONS.LOGIN_FAILED,
            message: error.message,
        });
    }
}

function* loginSaga() {
    yield takeLatest(LOGIN_ACTIONS.LOGIN, loginUser);
}

export default loginSaga;
