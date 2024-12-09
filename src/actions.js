// actions.js
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