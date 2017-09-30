export const logInAndEnable = () => {
    return {
        type: 'SET_STATUS',
        status: 'LOGGED_IN_ENABLED'
    };
};

export const logInAndDisable = () => {
    return {
        type: 'SET_STATUS',
        status: 'LOGGED_IN_DISABLED'
    };
};

export const logOut = () => {
    return {
        type: 'SET_STATUS',
        status: 'LOGGED_OUT'
    };
};
