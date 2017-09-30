import React, {Component} from 'react';
import LogInContainer from '../containers/LogInContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.status);
        switch (this.props.status) {
            case 'LOADING':
                return (<div>Loading</div>);
            case 'LOGGED_IN':
                return (
                    <div>
                        <button onClick={() => this.props.onLogOut()}>Log Out</button>
                    </div>
                );
            case 'LOGGED_OUT':
            default:
                return <LogInContainer/>;
        }
    }
}

export default App;