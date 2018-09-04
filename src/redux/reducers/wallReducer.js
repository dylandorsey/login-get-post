import { combineReducers } from 'redux';
import { WALL_ACTIONS } from '../actions/wallActions';



const arrayOfComments = (state = [], action) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_ARRAY_OF_COMMENTS:
        return action.payload;
        default:
        return state;
    }
}

const arrayOfPosts = (state = [], action) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_ARRAY_OF_POSTS:
        return action.payload;
        default:
        return state;
    }
}

const commentPostID = (state = '', action ) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_COMMENT_POST_ID:
            return action.payload;
        default:
            return state;
    }
}

const existingCommentIDs = (state = [], action ) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_ARRAY_OF_EXISTING_COMMENT_IDS:
            return action.payload;
        default:
            return state;
    }
}

const existingPostIDs = (state = [], action) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_ARRAY_OF_EXISTING_POST_IDS:
            return action.payload;
        default:
            return state;
    }
}

const textData = (state = '', action) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_NEW_COMMENT_TEXT:
            return action.payload;
        case WALL_ACTIONS.SET_NEW_POST_TEXT:
            return action.payload;
        case WALL_ACTIONS.SET_NEW_POST_ID:
            return action.payload;
        default:
            return state;
    }
}

const wallData = (state = {}, action) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_WALL_DATA:
            return action.payload;
        default:
            return state;
    }
}

const errorMessage = (state = '', action) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_ERROR_MESSAGE:
            return 'Failed to post.';
        default:
            return state;
    }
}

export default combineReducers({
    arrayOfComments,
    arrayOfPosts,
    commentPostID,
    errorMessage,
    existingCommentIDs,
    existingPostIDs,
    textData,
    wallData,
})