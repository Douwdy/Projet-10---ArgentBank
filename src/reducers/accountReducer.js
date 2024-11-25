const initialState = {
    operations: [],
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_OPERATIONS':
            return {
                ...state,
                operations: action.payload,
            };
        default:
            return state;
    }
};

export default accountReducer;