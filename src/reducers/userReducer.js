import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
    user: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.API_REQUEST:
            switch (action.meta.requestType) {
                case 'LOGIN':
                case 'SIGNUP':
                case 'FETCH_PROFILE':
                case 'UPDATE_PROFILE':
                    return {
                        ...state,
                        isLoading: true,
                        error: null,
                    };
                default:
                    return state;
            }
        case types.API_SUCCESS:
            switch (action.meta.requestType) {
                case 'LOGIN':
                case 'SIGNUP':
                case 'FETCH_PROFILE':
                case 'UPDATE_PROFILE':
                    return {
                        ...state,
                        isLoading: false,
                        user: action.payload,
                    };
                default:
                    return state;
            }
        case types.API_FAILURE:
            switch (action.meta.requestType) {
                case 'LOGIN':
                case 'SIGNUP':
                case 'FETCH_PROFILE':
                case 'UPDATE_PROFILE':
                    return {
                        ...state,
                        isLoading: false,
                        error: action.payload,
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default userReducer;