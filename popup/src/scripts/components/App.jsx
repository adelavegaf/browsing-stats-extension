import React, {Component} from 'react';
import LogInContainer from '../containers/LogInContainer';
import ConfigurationContainer from '../containers/ConfigurationContainer';

class App extends Component {
    render() {
        if (this.props.authenticated) {
            return <ConfigurationContainer/>;
        } else {
            return <LogInContainer/>;
        }
    }
}

export default App;