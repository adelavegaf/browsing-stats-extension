import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {alias, wrapStore} from 'react-chrome-redux';
import thunk from 'redux-thunk';

import {createClass} from 'asteroid';

const Asteroid = createClass();
const asteroid = new Asteroid({
    endpoint: 'ws://localhost:3000/websocket'
});

const aliases = {
    'LOG_IN': (action) => {
        return (dispatch) => {
            asteroid.loginWithPassword({username: action.username, password: action.password})
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
            asteroid.logout()
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

const store = createStore(rootReducer, applyMiddleware(
    alias(aliases),
    thunk
));

wrapStore(store, {
    portName: 'browsing-stats'
});