import {combineReducers} from 'redux';

const initialAuthenticatedState = false;

function authenticated(state = initialAuthenticatedState, action) {
    switch (action.type) {
        case 'SET_AUTHENTICATED_STATUS':
            return action.authenticated;
        default:
            return state;
    }
}

const initialAuthenticationErrorState = '';

function authenticationError(state = initialAuthenticationErrorState, action) {
    switch (action.type) {
        case 'SET_AUTHENTICATION_ERROR':
            return action.authenticationError;
        default:
            return state;
    }
}

const initialAuthenticationLoadingState = false;

function authenticationLoading(state = initialAuthenticationLoadingState, action) {
    switch (action.type) {
        case 'SET_AUTHENTICATION_LOADING':
            return action.authenticationLoading;
        default:
            return state;
    }
}

const initialTodayPercentagesState = [];

function todayPercentages(state = initialTodayPercentagesState, action) {
    switch (action.type) {
        case 'SET_TODAY_PERCENTAGES':
            return action.todayPercentages;
        default:
            return state;
    }
}

const initialGoalsStatusState = [];

function goalsStatus(state = initialGoalsStatusState, action) {
    switch (action.type) {
        case 'SET_GOALS_STATUS':
            return action.goalsStatus;
        default:
            return state;
    }
}

const initialAddGoalStatusState = '';

function addGoalStatus(state = initialAddGoalStatusState, action) {
    switch (action.type) {
        case 'SET_ADD_GOAL_STATUS':
            return action.addGoalStatus;
        default:
            return state;
    }
}

export default combineReducers({
    authenticated,
    authenticationError,
    authenticationLoading,
    todayPercentages,
    goalsStatus,
    addGoalStatus
});
