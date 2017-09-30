const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED_STATUS':
            return action.authenticated;
        default:
            return state;
    }
};
