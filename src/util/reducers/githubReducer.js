import {actionTypes} from "../actions";

const initialState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    error: null,
}

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_START:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
            }
        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                user: action.payload
            }
        case actionTypes.GET_USER_FAILURE: 
            return {
                ...state,
                error: action.payload.error
            }
        default: 
            return state;
            
    }
}

export default githubReducer;