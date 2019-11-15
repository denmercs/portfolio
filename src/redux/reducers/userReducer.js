import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_UESR_FAIL,
  GET_REPO_START,
  GET_REPO_SUCCESS,
  GET_REPO_FAIL
} from "../types";

const initialState = {
  user: [],
  repo: [],
  loading: false,
  success: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        loading: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload
      };
    case GET_UESR_FAIL:
      return {
        ...state,
        success: false
      };
    case GET_REPO_START:
      return {
        ...state,
        loading: true
      };
    case GET_REPO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        repo: action.payload
      };
    case GET_REPO_FAIL:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
