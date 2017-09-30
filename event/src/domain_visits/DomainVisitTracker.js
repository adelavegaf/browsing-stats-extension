import DomainVisit from './DomainVisit';

export default class DomainVisitTracker {
    constructor() {
        this.currentDomainVisit = null;
    }

    onURLChange(newUrl) {
        const currentURL = new URL(newUrl);
        if (!currentURL.protocol.includes('http')) {
            this.onNoWebsiteFocus();
            return;
        }
        if (this.currentDomainVisit && currentURL.hostname === this.currentDomainVisit.hostname) {
            return;
        }
        this.updateTimeSpentOnVisit();
        this.currentDomainVisit = new DomainVisit(currentURL.hostname);
    }

    onNoWebsiteFocus() {
        this.updateTimeSpentOnVisit();
        this.removeVisit();
    }

    updateTimeSpentOnVisit() {
        if (this.currentDomainVisit) {
            this.currentDomainVisit.increaseTimeSpent();
        }
    }

    removeVisit() {
        this.currentDomainVisit = null;
    }
}