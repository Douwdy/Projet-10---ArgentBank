import * as types from './actionTypes';
import config from './config';

export const toggleDropdown = (id) => ({
    type: types.TOGGLE_DROPDOWN,
    payload: id,
});

export const toggleEditing = () => ({
    type: types.TOGGLE_EDITING,
});

export const setEditing = (isEditing) => ({
    type: types.SET_EDITING,
    payload: isEditing,
});

export const loadAccountData = (data) => ({
    type: types.LOAD_ACCOUNT_DATA,
    payload: data,
});

export const apiRequest = (requestType, payload) => ({
    type: types.API_REQUEST,
    meta: { requestType },
    payload,
});

export const apiSuccess = (requestType, response) => ({
    type: types.API_SUCCESS,
    meta: { requestType },
    payload: response,
});

export const apiFailure = (requestType, error) => (dispatch) => {
    if (error.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
    }

    const errorMessage = error.message || 'An unknown error occurred';
    const errorStatus = error.status || 500;

    dispatch({
        type: types.API_FAILURE,
        meta: { requestType },
        payload: { message: errorMessage, status: errorStatus },
    });
};

export const login = (credentials) => async (dispatch) => {
    dispatch(apiRequest('LOGIN', credentials));
    try {
        const response = await fetch(`${config.API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });

        const text = await response.text();
        const data = text ? JSON.parse(text) : {};

        if (response.ok) {
            dispatch(apiSuccess('LOGIN', data));
            localStorage.setItem('token', data.body.token);
            window.location.href = '/dashboard';
        } else {
            dispatch(apiFailure('LOGIN', data));
        }
    } catch (error) {
        dispatch(apiFailure('LOGIN', error));
    }
};

export const signup = (userInfo) => async (dispatch) => {
    dispatch(apiRequest('SIGNUP', userInfo));
    try {
        const response = await fetch(`${config.API_URL}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(apiSuccess('SIGNUP', data));
        } else {
            dispatch(apiFailure('SIGNUP', data));
        }
    } catch (error) {
        dispatch(apiFailure('SIGNUP', error));
    }
};

export const fetchProfile = () => async (dispatch) => {
    dispatch(apiRequest('FETCH_PROFILE'));
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${config.API_URL}/user/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const text = await response.text();
        const data = text ? JSON.parse(text) : {};

        if (response.ok) {
            dispatch(apiSuccess('FETCH_PROFILE', data));
        } else {
            dispatch(apiFailure('FETCH_PROFILE', data));
        }
    } catch (error) {
        dispatch(apiFailure('FETCH_PROFILE', error));
    }
};

export const updateProfile = (profileInfo, token, onSuccess) => async (dispatch) => {
    dispatch(apiRequest('UPDATE_PROFILE', profileInfo));
    try {
        const response = await fetch(`${config.API_URL}/user/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(profileInfo),
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(apiSuccess('UPDATE_PROFILE', data));
            if (onSuccess) onSuccess();
        } else {
            dispatch(apiFailure('UPDATE_PROFILE', data));
        }
    } catch (error) {
        dispatch(apiFailure('UPDATE_PROFILE', error));
    }
};