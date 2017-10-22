import React, {Component} from 'react';
import LogInContainer from '../containers/LogInContainer';
import ExtensionContainer from '../containers/ExtensionContainer';
import AppBar from 'material-ui/AppBar';
import {FlatButton} from 'material-ui';
import ButtonStyles from '../utils/ButtonStyles';

const titleStyle = {
    'fontWeight': 300,
    'fontSize': '32px'
};

class App extends Component {

    getLogOutButton() {
        return (
            <FlatButton label="Log Out"
                        labelStyle={ButtonStyles.getFlatButtonStyle()}
                        onClick={() => this.props.onLogOut()}/>
        );
    }

    render() {
        const toolbar = (
            <AppBar
                title="WEB DRAIN"
                showMenuIconButton={false}
                titleStyle={titleStyle}
                iconElementRight={this.props.authenticated ? this.getLogOutButton() : <div/>}
            />
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