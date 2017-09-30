import {connect} from 'react-redux';
import {logIn, logOut} from '../actions/index';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogIn: () => {
            dispatch(logIn());
        },
        onLogOut: () => {
            dispatch(logOut());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);