import { TOGGLE_THEME, SET_TOKEN, RESET_TOKEN } from './actions';

function themeReducer(state = false, action) {
    switch(action.type) {
        case TOGGLE_THEME:
            return !state;
        default:
            return state;
    }
}

function tokenReducer(state = "", action) {
    switch(action.type) {
        case SET_TOKEN:
            return action.token;
        case RESET_TOKEN:
            return "";
        default:
            return state;
    }
}

export default function rootReducer(state = {}, action) {
    return {
        theme: themeReducer(state.theme, action),
        token: tokenReducer(state.token, action)
    }
}