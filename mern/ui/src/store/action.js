import * as types from "./types";

export function setUser(user) {
    return {
        type: types.SET_USER,
        data: user,
    };
}

export function logout() {
    return {
        type: types.LOG_OUT,
        data: false,
    };
}

export const setCurrentCountry = (country) => {
    return {
        type: types.SET_CURRENT_COUNTRY,
        data: country,
    };
};

export const setShowForum = (v) => {
    return {
        type: types.SET_CURRENT_COUNTRY,
        data: v,
    };
};
// export function setDetailData(data, events) {
//     return {
//         type: types.UPDATE_DETAIL,
//         payload: { data, events },
//     };
// }
