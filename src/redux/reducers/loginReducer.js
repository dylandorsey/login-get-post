import { combineReducers } from 'redux';
import { LOGIN_ACTIONS } from '../actions/loginActions';

const loginData = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ACTIONS.SET_USERNAME_AND_PASSWORD:
            return action.payload;
        case LOGIN_ACTIONS.CLEAR_LOGIN_DATA:
            return '';
        default:
            return state;
    }
}

const loginMessage = (state = '', action) => {
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_FAILED:
            return 'The login failed';
        default:
            return state;
    }
}

const loginStatus = (state = false, action) => {
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_SUCCESSFUL:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    loginData,
    loginMessage,
    loginStatus,
})