import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN_ACTIONS } from '../actions/loginActions';
import { WALL_ACTIONS } from '../actions/wallActions';
import {
    callGetAuthenticationData,
    callGetWallData,
} from '../requests/loginRequests';

function* loginUser(action) {
    try {
        // yield put({
        //     type: LOGIN_ACTIONS.SET_USERNAME_AND_PASSWORD,
        //     payload: action.payload,
        // });
        yield console.log(action.payload);
        const authenticationData = yield callGetAuthenticationData(action.payload);
        // yield put({
        //     type: LOGIN_ACTIONS.CLEAR_LOGIN_DATA
        // })
        yield put({
            type: LOGIN_ACTIONS.LOGIN_SUCCESSFUL,
            payload: true,
        })
        yield put({
            type: LOGIN_ACTIONS.SET_AUTHENTICATION_DATA,
            payload: authenticationData
        })
        const accessToken = authenticationData.access_token
        const wallData = yield callGetWallData(accessToken);
        yield console.log('wallData call returned with:')
        yield console.log(wallData);
        yield put({
            type: WALL_ACTIONS.SET_WALL_DATA,
            payload: wallData
        })
    } catch (error) {
        yield put({
            type: LOGIN_ACTIONS.LOGIN_FAILED,
            message: error.message || "the log in failed",
        });
    }
}

function* loginSaga() {
    yield takeLatest(LOGIN_ACTIONS.LOGIN, loginUser);
}

export default loginSaga;
