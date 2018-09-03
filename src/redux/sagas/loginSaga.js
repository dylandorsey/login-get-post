import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { WALL_ACTIONS } from '../actions/wallActions';
import { callGetAuthenticationData } from '../requests/loginRequests';

function* loginUser(action) {
    try {
        yield put({
            type: LOGIN_ACTIONS.SET_USERNAME_AND_PASSWORD,
            payload: action.payload,
        });
        yield put({
            type: LOGIN_ACTIONS.LOGIN_SUCCESSFUL,
            payload: true,
        })
        const authenticationData = yield callGetAuthenticationData();
        yield put({
            type: LOGIN_ACTIONS.SET_AUTHENTICATION_DATA,
            authenticationData
        })
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
