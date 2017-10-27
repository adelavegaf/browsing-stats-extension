import Api from './api';
import Statistics from './statistics';
import Goals from './goals';

function getGoalStatus(dispatch) {
    return Goals.getDailyGoalStatus()
                .then(goals => {
                    return dispatch({
                        type: 'SET_GOALS_STATUS',
                        goalsStatus: goals
                    });
                })
                .catch(error => {
                    console.error(error);
                });
}

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
                          return dispatch({
                              type: 'SET_AUTHENTICATION_LOADING',
                              authenticationLoading: true
                          });
                      });
        }
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
    },
    'ADD_GOAL': (action) => {
        return (dispatch) => {
            dispatch({
                type: 'SET_ADD_GOAL_STATUS',
                addGoalStatus: 'loading'
            });
            return Api.addGoal(action.hostname, action.quantifier, action.timeGoal)
                      .then(() => {
                          return dispatch({
                              type: 'SET_ADD_GOAL_STATUS',
                              addGoalStatus: 'success'
                          });
                      })
                      .catch(error => {
                          console.error(error);

                          return dispatch({
                              type: 'SET_ADD_GOAL_STATUS',
                              addGoalStatus: 'error'
                          });
                      });
        }
    },
    'REMOVE_GOAL': (action) => {
        return (dispatch) => {
            return Api.removeGoal(action.goalId)
                      .then(() => {
                          return getGoalStatus(dispatch);
                      })
                      .catch(error => {
                          console.error(error);
                      });
        }
    },
    'GET_GOALS_STATUS': () => {
        return (dispatch) => {
            return getGoalStatus(dispatch);
        }
    }
};

export default aliases;