import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.status) {
            case 'LOGGED_OUT':
                return (
                    <div>
                        <button onClick={() => this.props.onLogIn()}>Log In</button>
                    </div>);
                break;
            default:
                return (
                    <div>
                        <button onClick={() => this.props.onLogOut()}>Log Out</button>
                    </div>
                );
        }
    }
}

export default App;