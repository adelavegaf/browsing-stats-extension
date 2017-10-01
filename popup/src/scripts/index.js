import React from 'react';
import {render} from 'react-dom';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';
import AppContainer from './containers/AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

const proxyStore = new Store({
    portName: 'browsing-stats'
});

render(
    <Provider store={proxyStore}>
        <MuiThemeProvider>
            <AppContainer/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);