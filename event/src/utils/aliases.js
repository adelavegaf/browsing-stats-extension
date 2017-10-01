import Api from './api';
import DomainVisitListeners from '../domain_visits/DomainVisitListeners';

const aliases = {
    'LOG_IN': (action) => {
        return (dispatch) => {
            return Api.login(action.username, action.password)
                      .then(() => {
                          return dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: true});
                      })
                      .catch(() => {
                          return dispatch({
                              type: 'SET_AUTHENTICATION_ERROR',
                              authenticationError: 'Incorrect username or password'
                          });
                      });
        }
    },
    'LOG_OUT': () => {
        return (dispatch) => {
            return Api.logout()
                      .then(() => {
                          DomainVisitListeners.stop();
                          return dispatch({type: 'SET_AUTHENTICATED_STATUS', authenticated: false});
                      });
        }
    },
    'SET_EXTENSION_ENABLED': (action) => {
        if (action.extensionEnabled) {
            DomainVisitListeners.start();
        } else {
            DomainVisitListeners.stop();
        }
        return action;
    }
};

export default aliases;