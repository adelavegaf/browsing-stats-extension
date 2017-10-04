import Api from './api';
import DomainVisitListeners from '../domain_visits/DomainVisitListeners';
import Statistics from './statistics';

const aliases = {
    'LOG_IN': (action) => {
        return (dispatch) => {
            return Api.login(action.username, action.password)
                      .then(() => {
                          return dispatch({
                              type: 'SET_AUTHENTICATION_LOADING',
                              authenticationLoading: true
                          });
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
                          return dispatch({
                              type: 'SET_AUTHENTICATION_LOADING',
                              authenticationLoading: true
                          });
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
    },
    'UPDATE_TODAY_PERCENTAGES': () => {
        return (dispatch) => {
            return Statistics.getTodayTopFivePercentages()
                             .then(percentages => {
                                 return dispatch({
                                     type: 'SET_TODAY_PERCENTAGES',
                                     todayPercentages: percentages
                                 });
                             })
                             .catch(error => {
                                 console.error(error);
                                 return dispatch({});
                             });
        }
    }
};

export default aliases;