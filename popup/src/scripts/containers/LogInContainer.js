import React from 'react';
import LogIn from '../components/LogIn';
import {logIn} from '../actions/index';
import {connect} from 'react-redux';


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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
