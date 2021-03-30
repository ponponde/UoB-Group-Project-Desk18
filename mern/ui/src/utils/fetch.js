import * as ep from "../Endpoint";
import axios from "axios";

export const login = (values, callback) => {
    return axios.post(ep.LOGIN_API, values).then(
        (response) => {
            // console.log(response);
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
            console.log(response);
            login(values);
            callback && callback();
            return response;
        },
        (error) => {
            console.log(error);
        }
    );
};
