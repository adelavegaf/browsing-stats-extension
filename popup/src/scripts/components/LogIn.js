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
                           value={this.props.username}
                           onChange={(e) => this.props.onUserNameChange(e.target.value)}/>
                <TextField type="password"
                           floatingLabelText="Password"
                           floatingLabelFixed={true}
                           value={this.props.password}
                           onChange={(e) => this.props.onPasswordChange(e.target.value)}/>
                <RaisedButton label="Log In" onClick={() => this.props.onLogIn()}/>
                <span>{this.props.authenticationError}</span>
            </div>
        )
    }
}

export default LogIn;