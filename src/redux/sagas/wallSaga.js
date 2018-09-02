import { put, takeLatest } from 'redux-saga/effects';
import { WALL_ACTIONS } from '../actions/wallActions';

function* postNewPost(action) {
    try {
        yield put({
            type: WALL_ACTIONS.SET_NEW_POST_TEXT,
            payload: action.payload,
        });
    } catch (error) {
        yield put({
            type: WALL_ACTIONS.SET_ERROR_MESSAGE,
            message: error.message,
        });
    }
}

function* postNewComment(action) {
    try {
        yield put({
            type: WALL_ACTIONS.SET_NEW_COMMENT_TEXT,
            payload: action.payload,
        })
    } catch (error) {
        yield put({
            type: WALL_ACTIONS.SET_ERROR_MESSAGE,
            message: error.message,
        })
    }
}

function* wallSaga() {
    yield takeLatest(WALL_ACTIONS.POST_NEW_POST, postNewPost);
    yield takeLatest(WALL_ACTIONS.POST_NEW_COMMENT, postNewComment);
}

export default wallSaga;
