export const logIn = () => {
    return {
        type: 'LOG_IN',
        username: 'adelavega',
        password: 'example'
    };
};

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    };
};
