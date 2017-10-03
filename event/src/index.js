import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {alias, wrapStore} from 'react-chrome-redux';
import aliases from './utils/aliases';
import thunk from 'redux-thunk';
import Api from './utils/api';

const store = createStore(rootReducer, applyMiddleware(
    alias(aliases),
    thunk
));

wrapStore(store, {
    portName: 'browsing-stats'
});

Api.onLogIn(() => {
    store.dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: true});
    store.dispatch({type: 'SET_AUTHENTICATION_LOADING', authenticationLoading: false});
});

Api.onLogOut(() => {
    store.dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: false});
    store.dispatch({type: 'SET_AUTHENTICATION_LOADING', authenticationLoading: false});
});