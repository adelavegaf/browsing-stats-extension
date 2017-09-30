export const logIn = (username, password) => {
    return {
        type: 'LOG_IN',
        username: username,
        password: password
    };
};

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    };
};
