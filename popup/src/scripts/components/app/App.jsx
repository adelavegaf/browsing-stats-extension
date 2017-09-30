import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logInAndEnable, logOut} from '../../actions/index';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.status) {
            case 'LOGGED_OUT':
                return (
                    <div>
                        <button onClick={this.props.onLogIn}>Log In</button>
                    </div>);
                break;
            default:
                return (
                    <div>
                        <button onClick={this.props.onLogOut}>Log Out</button>
                    </div>
                );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogIn: () => {
            dispatch(logInAndEnable());
        },
        onLogOut: () => {
            dispatch(logOut());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);