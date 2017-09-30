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
                        dispatch({type: 'SET_STATUS', status: 'LOGGED_IN'});
                    });
        }
    },
    'LOG_OUT': () => {
        return (dispatch) => {
            asteroid.logout()
                    .then(() => {
                        dispatch({type: 'SET_STATUS', status: 'LOGGED_OUT'});
                    });
        }
    }
};

const store = createStore(rootReducer, applyMiddleware(
    alias(aliases),
    thunk
));

wrapStore(store, {
    portName: 'browsing-stats'
});