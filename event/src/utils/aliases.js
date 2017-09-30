import Api from './api';

const aliases = {
    'LOG_IN': (action) => {
        return (dispatch) => {
            Api.login(action.username, action.password)
               .then(() => {
                   dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: true});
               })
               .catch(() => {
                   dispatch({
                       type: 'SET_AUTHENTICATION_ERROR',
                       authenticationError: 'Incorrect username or password'
                   });
               });
        }
    },
    'LOG_OUT': () => {
        return (dispatch) => {
            Api.logout()
               .then(() => {
                   dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: false});
               });
        }
    },
    'SET_EXTENSION_ENABLED': (action) => {
        // if true add all listeners, otherwise remove them all.
        return action;
    }
};

export default aliases;