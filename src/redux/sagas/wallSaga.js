import { put, takeLatest } from 'redux-saga/effects';
import { WALL_ACTIONS } from '../actions/wallActions';
import { 
    callPOSTWallComment,
    callPOSTWallPost,
    callGETWallComments,
    callGETWallPosts,
 } from '../requests/wallRequests';
// import { extractPostIDs } from '../../components/functions/functions';

function* postNewPost(action) {
    try {
        let arrayOfPostIDs = action.payload.arrayOfExistingPostIDs;
        const postData = action.payload;
        yield console.log(postData);
        yield put({ 
            type: WALL_ACTIONS.SET_NEW_POST_TEXT,
            payload: postData,
        });
        const newPost = yield callPOSTWallPost(postData)
        yield console.log(newPost);
        yield console.log(newPost.id);
        yield console.log(`new post Id is ${newPost.id}`);

        yield put({
            type: WALL_ACTIONS.SET_NEW_POST_ID,
            payload: newPost.id,
        })
        const updatedArrayOfPostIDs = [...arrayOfPostIDs, newPost.id]
        yield console.log(updatedArrayOfPostIDs);
        const arrayOfPosts = yield callGETWallPosts(postData.accessToken, updatedArrayOfPostIDs);
        yield put({
            type: WALL_ACTIONS.SET_ARRAY_OF_EXISTING_POST_IDS,
            payload: updatedArrayOfPostIDs
        })
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

function* getWallPostsByID() {

}

function* postNewComment(action) {
    try {
        let arrayOfCommentIDs = action.payload.arrayOfExistingCommentIDs;
        const commentData = action.payload;
        yield console.log(commentData);
        yield put({ 
            type: WALL_ACTIONS.SET_NEW_COMMENT_TEXT,
            payload: commentData,
        });
        const newComment = yield callPOSTWallComment(commentData)
        yield console.log(newComment);
        yield console.log(newComment.id);
        yield console.log(`new comment Id is ${newComment.id}`);
        const updatedArrayOfCommentIDs = [...arrayOfCommentIDs, newComment.id]
        yield console.log(updatedArrayOfCommentIDs);
        yield put({
            type: WALL_ACTIONS.SET_ARRAY_OF_EXISTING_COMMENT_IDS,
            payload: updatedArrayOfCommentIDs
        })
        const arrayOfComments = yield callGETWallComments(commentData.accessToken, updatedArrayOfCommentIDs);
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
