import React, {Component} from 'react';
import LogInContainer from '../containers/LogInContainer';
import ExtensionContainer from '../containers/ExtensionContainer';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    render() {
        const toolbar = (
            <AppBar title="WebStats" showMenuIconButton={false}/>
        );
        if (this.props.authenticated) {
            return (
                <div>
                    {toolbar}
                    <ExtensionContainer/>
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