import React, {Component} from 'react';

class LogIn extends Component {
    constructor(props) {
        super(props);
    }

    getAccountInfoAndLogIn() {
        const username = this.usernameInput.value;
        const password = this.passwordInput.value;
        this.props.onLogIn(username, password);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="username" ref={(input) => this.usernameInput = input}/>
                <input type="password" placeholder="password" ref={(input) => this.passwordInput = input}/>
                <button onClick={() => this.getAccountInfoAndLogIn()}>Log In</button>
            </div>
        )
    }
}

export default LogIn;