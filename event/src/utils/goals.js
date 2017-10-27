import Api from './api';

export default class Goals {
    static getDailyGoalStatus() {
        const sinceDate = new Date();
        sinceDate.setHours(0, 0, 0, 0);
        return Api.getGoalsStatus(sinceDate);
    }
}