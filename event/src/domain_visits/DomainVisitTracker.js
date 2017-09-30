import DomainVisit from './DomainVisit';

export default class DomainVisitTracker {
    constructor() {
        this.currentDomainVisit = null;
    }

    onNoWebsiteFocus() {
        this.updateTimeSpentOnVisit();
        this.removeVisit();
    }

    onURLChange(newUrl) {
        const currentURL = new URL(newUrl);
        if (this.currentDomainVisit && currentURL.hostname === this.currentDomainVisit.hostname) {
            return;
        }
        this.updateTimeSpentOnVisit();
        this.currentDomainVisit = new DomainVisit(currentURL.hostname);
    }

    updateTimeSpentOnVisit() {
        if (this.currentDomainVisit) {
            console.log('increasing time spent on', this.currentDomainVisit.hostname);
            this.currentDomainVisit.increaseTimeSpent();
        }
    }

    removeVisit() {
        this.currentDomainVisit = null;
    }
}