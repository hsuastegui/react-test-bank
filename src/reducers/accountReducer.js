const accountReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_ACCOUNT':
            return Object.assign({}, state, action.payload);
        case 'CLEAR_ACCOUNT':
            return action.payload;
        default:
            return state;
    }
};

export default accountReducer;