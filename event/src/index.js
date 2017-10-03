import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {alias, wrapStore} from 'react-chrome-redux';
import aliases from './utils/aliases';
import thunk from 'redux-thunk';
import Api from './utils/api';
import {throttle} from 'lodash';
import DomainVisitListeners from './domain_visits/DomainVisitListeners';

chrome.storage.local.get(['state'], ({state}) => {
    const store = createStore(
        rootReducer,
        state,
        applyMiddleware(
            alias(aliases),
            thunk
        )
    );

    wrapStore(store, {
        portName: 'browsing-stats'
    });

    /**
     * Start tracking if it was enabled in the past.
     */
    if (state.extensionEnabled) {
        DomainVisitListeners.start();
    }
    /**
     * Save the current store state to local storage
     */
    const saveState = () => {
        console.info('Saving state to chrome.storage.local');

        const state = store.getState();

        chrome.storage.local.set({
            state: state
        });
    };

    // On new state, persist to local storage
    const throttledSave = throttle(saveState, 5000, {trailing: true, leading: true});
    store.subscribe(throttledSave);

    Api.onLogIn(() => {
        store.dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: true});
        store.dispatch({type: 'SET_AUTHENTICATION_LOADING', authenticationLoading: false});
    });

    Api.onLogOut(() => {
        store.dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: false});
        store.dispatch({type: 'SET_AUTHENTICATION_LOADING', authenticationLoading: false});
    });
});
