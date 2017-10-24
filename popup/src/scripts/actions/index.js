export const logIn = (username, password) => {
    return {
        type: 'LOG_IN',
        username: username,
        password: password
    };
};

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    };
};

export const updateTodayPercentages = () => {
    return {
        type: 'UPDATE_TODAY_PERCENTAGES'
    };
};

export const addGoal = (hostname, quantifier, timeGoal) => {
    return {
        type: 'ADD_GOAL',
        hostname: hostname,
        quantifier: quantifier,
        timeGoal: timeGoal
    };
};

export const removeGoal = (goalId) => {
    return {
        type: 'REMOVE_GOAL',
        goalId: goalId
    };
};

export const getGoalsStatus = () => {
    return {
        type: 'GET_GOALS_STATUS'
    };
};