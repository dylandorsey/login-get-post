import { put, takeLatest } from 'redux-saga/effects';
import { WALL_ACTIONS } from '../actions/wallActions';
import { callPOSTWallPost } from '../requests/wallRequests';

function* postNewPost(action) {
    try {
        const postData = action.payload;
        yield console.log(postData);
        yield put({ 
            type: WALL_ACTIONS.SET_NEW_POST_TEXT,
            payload: postData,
        });
        const newPostID = yield callPOSTWallPost(postData)
        yield console.log(newPostID);
        yield put({
            type: WALL_ACTIONS.SET_NEW_POST_ID,
            payload: newPostID,
        })
    } catch (error) {
        yield put({
            type: WALL_ACTIONS.SET_ERROR_MESSAGE,
            message: error.message || error,
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
