import { combineReducers } from 'redux';
import { WALL_ACTIONS } from '../actions/wallActions';

const textData = (state = '', action) => {
    switch (action.type) {
        case WALL_ACTIONS.SET_NEW_COMMENT_TEXT:
            return action.payload;
        case WALL_ACTIONS.SET_NEW_POST_TEXT:
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
    textData,
    errorMessage,
})