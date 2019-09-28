import axios from "axios";

import {actionTypes} from "../actions";

const apiUrl = "https://api.github.com/users"

export const getUser = () => dispatch => {
    dispatch({type: actionTypes.GET_USER_START});
    return axios.get(`${apiUrl}/denmercs`)
        .then(res => {
            setTimeout(() => {
                dispatch({type: actionTypes.GET_USER_SUCCESS, payload: res.data});
            }, 2500);
    })
        .catch(err => {
            setTimeout(() => {

                dispatch({type: actionTypes.GET_USER_FAILURE, payload: err})
            }, 2500);
    })
}
