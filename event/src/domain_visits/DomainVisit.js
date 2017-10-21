import Api from '../utils/api';

export default class DomainVisit {
    constructor(hostname) {
        this.id = null;
        this.hostname = hostname;
        this.lastUpdateDate = new Date();
        this.saveToDBPromise = Api.addVisit(this.hostname, 0 /* timeSpent */)
                                  .then(id => {
                                      this.id = id;
                                  })
                                  .catch(error => {
                                      console.error(error);
                                  });
    }

    increaseTimeSpent() {
        const currentTime = new Date();
        const timeSpent = currentTime - this.lastUpdateDate;
        this.lastUpdateDate = currentTime;
        this.saveToDBPromise.then(() => {
            Api.increaseTimeSpentOnVisit(this.id, timeSpent)
               .then(() => {
                   console.info('time spent on', this.hostname, 'was updated by', timeSpent, 'ms');
               })
               .catch(error => {
                   console.error(error);
               });
        });
    }
}