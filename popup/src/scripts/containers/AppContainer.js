import {connect} from 'react-redux';
import {logOut} from '../actions/index';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => {
            dispatch(logOut());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);