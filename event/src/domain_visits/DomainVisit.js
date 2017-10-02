import Api from '../utils/api';

export default class DomainVisit {
    constructor(hostname) {
        this.id = null;
        this.hostname = hostname;
        this.lastUpdateDate = new Date();
        this.timeSpent = 0;

        Api.addVisit(this.hostname, this.timeSpent)
           .then(id => {
               this.id = id;
           })
           .catch(error => {
               console.error(error);
           });
    }

    increaseTimeSpent() {
        const currentTime = new Date();
        this.timeSpent = currentTime - this.lastUpdateDate;
        this.lastUpdateDate = currentTime;
        Api.increaseTimeSpentOnVisit(this.id, this.timeSpent)
           .then(() => {
               console.log('time spent on', this.hostname, 'was updated by', this.timeSpent, 'ms');
           })
           .catch(error => {
               console.error(error);
           });
    }
}