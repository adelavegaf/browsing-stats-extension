import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {alias, wrapStore} from 'react-chrome-redux';
import aliases from './utils/aliases';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(
    alias(aliases),
    thunk
));

wrapStore(store, {
    portName: 'browsing-stats'
});