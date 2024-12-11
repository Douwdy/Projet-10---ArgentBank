import * as types from '../actionTypes';

const initialState = {
  activeDropdown: null,
  isEditing: false,
  accountData: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DROPDOWN:
      return {
        ...state,
        activeDropdown: state.activeDropdown === action.payload ? null : action.payload,
      };
    case types.TOGGLE_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    case types.SET_EDITING:
      return {
        ...state,
        isEditing: action.payload,
      };
    case types.LOAD_ACCOUNT_DATA:
      return {
        ...state,
        accountData: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;