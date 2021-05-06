import * as ep from "../Endpoint";
import axios from "axios";

export const login = (values, callback) => {
    return axios.post(ep.LOGIN_API, values).then(
        (response) => {
            localStorage.setItem(ep.SESSION_KEY, response.data.accessToken);
            callback && callback();
            return response;
        },
        (error) => {
            console.log(error);
        }
    );
};

export const signup = (values, callback) => {
    return axios.post(ep.SIGNUP_API, values).then(
        (response) => {
            login(values);
            callback && callback();
            return response;
        },
        (error) => {
            console.log(error);
        }
    );
};

export const getUserInfo = () => {
    const TOKEN = localStorage.getItem(ep.SESSION_KEY);
    if (!TOKEN) return null;
    return axios({
        method: "POST",
        url: "http://localhost:8080/api/auth/getUserInfo",
        data: { token: TOKEN },
    }).then(
        (response) => {
            localStorage.setItem(ep.SESSION_KEY, response.data.accessToken);
            return response.data;
        },
        (error) => {
            console.log(error);
        }
    );
};

export const getForumByCountry = (country_code) => {
    return axios({
        method: "GET",
        url: `http://localhost:8080/api/forum/${country_code}`,
    }).then(
        (response) => {
            return response.data;
        },
        (error) => {
            console.log(error);
        }
    );
};

export const sentPost = (data) => {
    return axios({
        method: "POST",
        url: ep.FOURM_POST_API,
        data,
    }).then(
        (response) => {
            return response.data;
        },
        (error) => {
            console.log(error);
        }
    );
};

export const getMapInfo = (code) => {
    return axios({
        method: "GET",
        url: ep.MAP_GET_API + code,
    }).then(
        (response) => {
            return response.data;
        },
        (error) => {
            console.log(error);
        }
    );
};

export const addPoint = (data) => {
    return; //@TODO: no time to complete it
    return axios({
        method: "POST",
        url: ep.POINT_POST_API,
        data,
    }).then(
        (response) => {
            console.log("POINT_POST_API", response.data);
            return response.data;
        },
        (error) => {
            console.log(error);
        }
    );
};
