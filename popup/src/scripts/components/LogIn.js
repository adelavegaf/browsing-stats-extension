import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui';
import './LogIn.css';
import ButtonStyles from '../utils/ButtonStyles';

class LogIn extends Component {
    render() {
        return (
            <div>
                <div className="login-card">
                    <Card>
                        <CardText>
                            <div className="login-prompt">
                                Welcome
                            </div>
                            <div className="center">
                                <TextField type="text"
                                           floatingLabelText="Username"
                                           floatingLabelFixed={true}
                                           errorText={this.props.authenticationError}
                                           value={this.props.username}
                                           onChange={(e) => this.props.onUserNameChange(e.target.value)}/>
                            </div>
                            <div className="center">
                                <TextField type="password"
                                           floatingLabelText="Password"
                                           floatingLabelFixed={true}
                                           errorText={this.props.authenticationError}
                                           value={this.props.password}
                                           onChange={(e) => this.props.onPasswordChange(e.target.value)}/>
                            </div>
                            <div className="center">
                                <RaisedButton
                                    label="Log In"
                                    secondary={true}
                                    labelStyle={ButtonStyles.getSecondaryButtonStyles()}
                                    onClick={() => this.props.onLogIn()}/>
                            </div>
                            <div className="register-prompt">
                                Don't have an account? <a href="https://webdrain.herokuapp.com" target="_blank">
                                Register now!</a>
                            </div>
                        </CardText>
                    </Card>
                </div>
            </div>
        )
    }
}

export default LogIn;