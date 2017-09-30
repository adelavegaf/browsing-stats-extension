import React, {Component} from 'react';
import LogInContainer from '../containers/LogInContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.authenticated) {
            return (
                <div>
                    <button onClick={() => this.props.onLogOut()}>Log Out</button>
                </div>
            );
        } else {
            return <LogInContainer/>;
        }
    }
}

export default App;