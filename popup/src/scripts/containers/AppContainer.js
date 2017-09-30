import {connect} from 'react-redux';
import {logIn, logOut} from '../actions/index';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        status: state.status
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