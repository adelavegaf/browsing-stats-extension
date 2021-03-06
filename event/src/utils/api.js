import {createClass} from 'asteroid';

const Asteroid = createClass();

const asteroid = new Asteroid({
    endpoint: 'ws://webdrain.herokuapp.com/websocket'
});

export default class Api {

    static login(username, password) {
        return asteroid.loginWithPassword({username: username, password: password});
    }

    static logout() {
        return asteroid.logout();
    }

    static onLogIn(callback) {
        asteroid.on('loggedIn', callback);
    }

    static onLogOut(callback) {
        asteroid.on('loggedOut', callback);
    }

    static addVisit(domain, timeSpent) {
        return asteroid.call('visits.insert', domain, timeSpent);
    }

    static increaseTimeSpentOnVisit(id, timeSpent) {
        return asteroid.call('visits.update', id, timeSpent);
    }

    static getTimeSpentSince(sinceDate) {
        return asteroid.call('visits.timeSpentSince', sinceDate.toUTCString());
    }

    static addGoal(hostname, quantifier, timeGoal) {
        return asteroid.call('addGoal', hostname, quantifier, timeGoal);
    }

    static removeGoal(id) {
        return asteroid.call('removeGoal', id);
    }

    static getGoalsStatus(sinceDate) {
        return asteroid.call('getGoalsStatus', sinceDate.toUTCString());
    }

    static getGoalStatus(sinceDate, hostname) {
        return asteroid.call('getGoalStatus', sinceDate.toUTCString(), hostname);
    }
}