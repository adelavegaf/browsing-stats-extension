const initialState = 'LOGGED_OUT';

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return action.status;
        default:
            return state;
    }
};
