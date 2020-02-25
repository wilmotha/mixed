import { TOGGLE_THEME, SET_TOKEN, RESET_TOKEN } from './actions';

const theme = {
    light: {
      themeColor: "#ffffff",
      background: "#fffffff",
      accent: "#1ED760",
      accentHover: "#19bd53",
      contentBox: "#fffffff",
      textColor: "#191414"
    },
    dark: {
      themeColor: "#191414",
      background: "#212121",
      accent: "#1ED760",
      accentHover: "#19bd53",
      contentBox: "#222222",
      textColor: "#ffffff"
    }
  };

function themeReducer(state = theme.dark, action) {
    console.log("state: ", state)
    switch(action.type) {
        case TOGGLE_THEME:
            if (state === theme.light) {
                return theme.dark;
            } else {
                return theme.light;
            }
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