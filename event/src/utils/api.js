import {createClass} from 'asteroid';

const Asteroid = createClass();

const asteroid = new Asteroid({
    endpoint: 'ws://localhost:3000/websocket'
});

export default class Api {

    static login(username, password) {
        return asteroid.loginWithPassword({username: username, password: password});
    }

    static logout() {
        return asteroid.logout();
    }

    static addVisit(domain, dateAccessed, timeSpent) {
        return asteroid.call('visits.insert', domain, dateAccessed, timeSpent);
    }

    static increaseTimeSpentOnVisit(id, timeSpent) {
        return asteroid.call('visits.update', id, timeSpent);
    }

    static getTimeSpentSince(date) {
        return asteroid.call('visits.timeSpentSince', date);
    }
}