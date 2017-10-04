import React from 'react';
import {render} from 'react-dom';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';
import AppContainer from './containers/AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';

const proxyStore = new Store({
    portName: 'browsing-stats'
});

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#00bbd3',
        primary2Color: '#62eeff',
        primary3Color: '#008ba2',
        accent1Color: '#ffc400',
        accent2Color: '#fff64f',
        accent3Color: '#c79400',
    }
});

render(
    <Provider store={proxyStore}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <AppContainer/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);