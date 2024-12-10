import { TOGGLE_EDITING, SET_EDITING, TOGGLE_DROPDOWN, LOAD_ACCOUNT_DATA } from '../actions';

const initialState = {
  activeDropdown: null,
  isEditing: false,
  accountData: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        activeDropdown: state.activeDropdown === action.payload ? null : action.payload,
      };
    case TOGGLE_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    case SET_EDITING:
      return {
        ...state,
        isEditing: action.payload,
      };
    case LOAD_ACCOUNT_DATA:
      return {
        ...state,
        accountData: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;