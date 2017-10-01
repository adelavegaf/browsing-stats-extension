import React, {Component} from 'react';
import LogIn from '../components/LogIn';
import {logIn} from '../actions/index';
import {connect} from 'react-redux';

class LogInContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onUserNameChange(value) {
        this.setState({username: value});
    }

    onPasswordChange(value) {
        this.setState({password: value});
    }

    onLogIn() {
        this.props.onLogIn(this.state.username, this.state.password);
    }

    render() {
        return React.createElement(LogIn, {
            authenticationError: this.props.authenticationError,
            onUserNameChange: (value) => this.onUserNameChange(value),
            onPasswordChange: (value) => this.onPasswordChange(value),
            onLogIn: () => this.onLogIn()
        });
    }
}

const mapStateToProps = (state) => {
    return {
        authenticationError: state.authenticationError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogIn: (username, password) => {
            dispatch(logIn(username, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
