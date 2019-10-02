import axios from "axios";

import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_UESR_FAIL,
  GET_REPO_START,
  GET_REPO_SUCCESS,
  GET_REPO_FAIL
} from "../types";

export const getUser = () => dispatch => {
  dispatch({ type: GET_USER_START });

  axios
    .get("https://api.github.com/users/denmercs")
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_UESR_FAIL, payload: err.response });
    });
};

export const getRepo = () => dispatch => {
  dispatch({ type: GET_REPO_START });

  axios
    .get("https://api.github.com/users/denmercs/repos")
    .then(res => {
      dispatch({ type: GET_REPO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_REPO_FAIL, payload: err.response });
    });
};
