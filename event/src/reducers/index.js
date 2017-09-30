import {combineReducers} from 'redux';

const initialAuthenticatedState = false;

function authenticated(state = initialAuthenticatedState, action) {
    switch (action.type) {
        case 'SET_AUTHENTICATED_STATUS':
            return action.authenticated;
        default:
            return state;
    }
}

const initialAuthenticationErrorState = '';

function authenticationError(state = initialAuthenticationErrorState, action) {
    switch (action.type) {
        case 'SET_AUTHENTICATION_ERROR':
            return action.authenticationError;
        default:
            return state;
    }
}

const initialExtensionEnabledState = false;

function extensionEnabled(state = initialExtensionEnabledState, action) {
    switch (action.type) {
        case 'SET_EXTENSION_ENABLED':
            return action.extensionEnabled;
        default:
            return state;
    }
}

export default combineReducers({
    authenticated,
    authenticationError,
    extensionEnabled
});
