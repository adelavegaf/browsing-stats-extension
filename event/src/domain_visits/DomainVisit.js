import Api from '../utils/api';

export default class DomainVisit {
    constructor(hostname) {
        const currentTime = new Date().getTime();

        this.id = null;
        this.hostname = hostname;
        this.dateAccessedTimestamp = currentTime;
        this.lastUpdateTimestamp = currentTime;
        this.timeSpent = 0;

        Api.addVisit(this.hostname, this.dateAccessedTimestamp, this.timeSpent)
           .then(id => {
               this.id = id;
           })
           .catch(error => {
               console.error(error);
           });
    }

    increaseTimeSpent() {
        const currentTime = new Date().getTime();
        this.timeSpent = currentTime - this.lastUpdateTimestamp;
        this.lastUpdateTimestamp = currentTime;
        Api.increaseTimeSpentOnVisit(this.id, this.timeSpent)
           .then(() => {
               console.log('time spent on', this.hostname, 'was updated');
           })
           .catch(error => {
               console.error(error);
           });
    }
}