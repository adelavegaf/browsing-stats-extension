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

    static addVisit(domain, dateAccessedTimestamp, timeSpent) {
        return asteroid.call('visits.insert', domain, dateAccessedTimestamp, timeSpent);
    }

    static increaseTimeSpentOnVisit(id, timeSpent) {
        return asteroid.call('visits.update', id, timeSpent);
    }
}