import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {alias, wrapStore} from 'react-chrome-redux';

import {createClass} from 'asteroid';

const aliases = {
    'LOG_IN': (action) => {
        asteroid.loginWithPassword({username: action.username, password: action.password});
        return {type: 'SET_STATUS', status: 'LOADING'}
    },
    'LOG_OUT': () => {
        asteroid.logout();
        return {type: 'SET_STATUS', status: 'LOADING'}
    }
};

const store = createStore(rootReducer, applyMiddleware(alias(aliases)));

wrapStore(store, {
    portName: 'browsing-stats'
});

const Asteroid = createClass();

const asteroid = new Asteroid({
    endpoint: 'ws://localhost:3000/websocket'
});

asteroid.on('loggedIn', () => {
    console.log('logged in');
    store.dispatch({type: 'SET_STATUS', status: 'LOGGED_IN_ENABLED'})
});

asteroid.on('loggedOut', () => {
    console.log('logged out');
    store.dispatch({type: 'SET_STATUS', status: 'LOGGED_OUT'})
});