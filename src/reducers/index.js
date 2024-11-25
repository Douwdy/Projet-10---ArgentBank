import { combineReducers } from 'redux';
import accountReducer from './accountReducer'; // Assuming you have an accountReducer

const rootReducer = combineReducers({
    account: accountReducer,
});

export default rootReducer;