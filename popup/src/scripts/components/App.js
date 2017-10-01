import React, {Component} from 'react';
import LogInContainer from '../containers/LogInContainer';
import ConfigurationContainer from '../containers/ConfigurationContainer';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    render() {
        const toolbar = (
            <AppBar title="Browsing Stats" showMenuIconButton={false}/>
        );
        if (this.props.authenticated) {
            return (
                <div>
                    {toolbar}
                    <ConfigurationContainer/>
                </div>
            );
        } else {
            return (
                <div>
                    {toolbar}
                    <LogInContainer/>
                </div>
            );
        }
    }
}

export default App;