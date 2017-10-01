import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LogIn extends Component {
    render() {
        return (
            <div>
                <TextField type="text"
                           floatingLabelText="Username"
                           floatingLabelFixed={true}
                           errorText={this.props.authenticationError}
                           value={this.props.username}
                           onChange={(e) => this.props.onUserNameChange(e.target.value)}/>
                <TextField type="password"
                           floatingLabelText="Password"
                           floatingLabelFixed={true}
                           errorText={this.props.authenticationError}
                           value={this.props.password}
                           onChange={(e) => this.props.onPasswordChange(e.target.value)}/>
                <RaisedButton label="Log In" onClick={() => this.props.onLogIn()}/>
            </div>
        )
    }
}

export default LogIn;