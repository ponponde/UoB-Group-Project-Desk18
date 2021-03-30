import * as types from "./types";
const initialState = {
    user: {},
    isLogin: true,
    currentCountry: "globle",
    showForum: false,
};
export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            console.log("reducser", action);
            return {
                ...state,
                user: action.data,
                isLogin: true,
            };
        case types.SET_CURRENT_COUNTRY:
            return {
                ...state,
                currentCountry: action.data,
            };
        case types.SET_SHOW_FORUM:
            return {
                ...state,
                showForum: action.data,
            };
        default:
            return state;
    }
}
