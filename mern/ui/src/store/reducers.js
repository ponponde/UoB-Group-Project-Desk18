import * as types from "./types";
const initialState = {
    user: {},
    isLogin: false,
    currentCountry: "globle",
    showForum: false,
    currentCountry_code: "",
};
export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            console.log("SET_USER", action.data);
            return {
                ...state,
                user: action.data,
                isLogin: true,
            };
        case types.SET_CURRENT_COUNTRY:
            console.log("SET_CURRENT_COUNTRY", action.data);
            return {
                ...state,
                currentCountry: action.data,
            };
        case types.SET_SHOW_FORUM:
            return {
                ...state,
                showForum: action.data,
            };
        case types.LOG_OUT:
            return {
                ...state,
                isLogin: false,
                user: {},
            };
        default:
            return state;
    }
}
