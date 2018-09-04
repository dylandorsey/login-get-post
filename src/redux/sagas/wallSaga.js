import { put, takeLatest } from 'redux-saga/effects';
import { WALL_ACTIONS } from '../actions/wallActions';
import { 
    callPOSTWallComment,
    callPOSTWallPost,
    callGETWallComments,
    callGETWallPosts,
 } from '../requests/wallRequests';

function* postNewPost(action) {
    try {
        // POST REQUEST TO WALL API
        const postData = action.payload;
        const newPost = yield callPOSTWallPost(postData)

        // SET NEW POST ID TO CLIENT SESSION STORAGE
        yield put({
            type: WALL_ACTIONS.SET_NEW_POST_ID,
            payload: newPost.id,
        })

        // PASS ARRAY OF EXISTING USER POST IDS TO A VARIABLE
        let arrayOfPostIDs = action.payload.arrayOfExistingPostIDs;
        // UPDATE ARRAY OF EXISTING USER POST IDS TO INCLUDE THE NEW POST ID
        const updatedArrayOfPostIDs = [...arrayOfPostIDs, newPost.id]

        // PASS UPDATED ARRAY OF POST IDS TO REDUX STATE
        yield put({
            type: WALL_ACTIONS.SET_ARRAY_OF_EXISTING_POST_IDS,
            payload: updatedArrayOfPostIDs
        })

        // GET REQUEST FROM WALL API FOR ALL USER POST OBJECTS
        const arrayOfPosts = yield callGETWallPosts(postData.accessToken, updatedArrayOfPostIDs);
        // PASS API RESPONSE TO REDUX STATE
        yield put({
            type: WALL_ACTIONS.SET_ARRAY_OF_POSTS,
            payload: arrayOfPosts
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
        // POST REQUEST TO WALL_COMMENT API
        const commentData = action.payload;
        const newComment = yield callPOSTWallComment(commentData)

        // PASS ARRAY OF EXISTING USER COMMENT IDS TO A VARIABLE
        let arrayOfCommentIDs = action.payload.arrayOfExistingCommentIDs;
        // UPDATE ARRAY OF EXISTING USER COMMENT IDS TO INCLUDE THE NEW COMMENT ID
        const updatedArrayOfCommentIDs = [...arrayOfCommentIDs, newComment.id]

        // THE UPDATED ARRAY OF COMMENT IDS TO REDUX STATE
        yield put({
            type: WALL_ACTIONS.SET_ARRAY_OF_EXISTING_COMMENT_IDS,
            payload: updatedArrayOfCommentIDs
        })

        // GET REQUEST FROM WALL_COMMENTS API FOR ALL USER COMMENT OBJECTS
        const arrayOfComments = yield callGETWallComments(commentData.accessToken, updatedArrayOfCommentIDs);
        // PASS API RESPONSE TO REDUX STATE
        yield put({
            type: WALL_ACTIONS.SET_ARRAY_OF_COMMENTS,
            payload: arrayOfComments
        })
    } catch (error) {
        yield put({
            type: WALL_ACTIONS.SET_ERROR_MESSAGE,
            message: error.message || error,
        });
    }
}

function* wallSaga() {
    yield takeLatest(WALL_ACTIONS.POST_NEW_POST, postNewPost);
    yield takeLatest(WALL_ACTIONS.POST_NEW_COMMENT, postNewComment);
}

export default wallSaga;
