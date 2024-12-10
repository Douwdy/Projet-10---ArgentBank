import * as types from './actionTypes';

export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const SET_EDITING = 'SET_EDITING';
export const LOAD_ACCOUNT_DATA = 'LOAD_ACCOUNT_DATA';



export const toggleDropdown = (id) => ({
  type: TOGGLE_DROPDOWN,
  payload: id,
});

export const toggleEditing = () => ({
  type: TOGGLE_EDITING,
});

export const setEditing = (isEditing) => ({
  type: SET_EDITING,
  payload: isEditing,
});

export const loadAccountData = (data) => ({
  type: LOAD_ACCOUNT_DATA,
  payload: data,
});

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
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
          dispatch({ type: types.LOGIN_SUCCESS, payload: data });
          localStorage.setItem('token', data.body.token);
          window.location.href = '/dashboard';
      } else {
          dispatch({ type: types.LOGIN_FAILURE, error: data });
      }
  } catch (error) {
      dispatch({ type: types.LOGIN_FAILURE, error });
  }
};

export const signup = (userInfo) => async (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      dispatch({ type: types.SIGNUP_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: types.SIGNUP_FAILURE, error });
  }
};

export const fetchProfile = (token) => async (dispatch) => {
  dispatch({ type: types.FETCH_PROFILE_REQUEST });
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
      });
      const data = await response.json();
      dispatch({ type: types.FETCH_PROFILE_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: types.FETCH_PROFILE_FAILURE, error });
  }
};

export const updateProfile = (profileInfo, token) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PROFILE_REQUEST });
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(profileInfo),
      });
      const data = await response.json();
      dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: types.UPDATE_PROFILE_FAILURE, error });
  }
};