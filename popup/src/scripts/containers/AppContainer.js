import {connect} from 'react-redux';
import {logIn, logOut} from '../actions/index';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated
    };
};

export default connect(mapStateToProps)(App);