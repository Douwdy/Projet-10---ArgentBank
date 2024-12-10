import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
    user: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
        case types.SIGNUP_REQUEST:
        case types.FETCH_PROFILE_REQUEST:
        case types.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case types.LOGIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
        case types.FETCH_PROFILE_SUCCESS:
        case types.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            };
        case types.LOGIN_FAILURE:
        case types.SIGNUP_FAILURE:
        case types.FETCH_PROFILE_FAILURE:
        case types.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default userReducer;