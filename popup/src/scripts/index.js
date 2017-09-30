import React from 'react';
import {render} from 'react-dom';

import AppContainer from './containers/AppContainer';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({
    portName: 'browsing-stats'
});

render(
    <Provider store={proxyStore}>
        <AppContainer/>
    </Provider>,
    document.getElementById('app')
);