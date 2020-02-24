export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_TOKEN = 'SET_TOKEN';
export const RESET_TOKEN = 'RESET_TOKEN';

export function toggle_theme(theme) {
    return {
        type: TOGGLE_THEME,
        theme
    }
}

export function set_token(token) {
    return {
        type: SET_TOKEN,
        token
    }
}

export function reset_token() {
    return {
        type: RESET_TOKEN,
        token: ""
    }
}