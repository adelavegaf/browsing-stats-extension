import DomainVisitTracker from './DomainVisitTracker';

let domainVisitTracker = null;

export default class DomainVisitListeners {
    static start() {
        domainVisitTracker = new DomainVisitTracker();
        chrome.tabs.onActivated.addListener(this.onTabActivated.bind(this));
        chrome.tabs.onUpdated.addListener(this.onTabUpdated.bind(this));
        chrome.windows.onFocusChanged.addListener(this.onWindowFocusChanged.bind(this));
    }

    static stop() {
        domainVisitTracker = null;
        chrome.tabs.onActivated.removeListener(this.onTabActivated);
        chrome.tabs.onUpdated.removeListener(this.onTabUpdated);
        chrome.windows.onFocusChanged.removeListener(this.onWindowFocusChanged);
    }

    static onTabActivated() {
        this.getCurrentUrl();
    }

    static onTabUpdated() {
        this.getCurrentUrl();
    }

    static onWindowFocusChanged(windowId) {
        if (windowId === chrome.windows.WINDOW_ID_NONE) {
            domainVisitTracker.onNoWebsiteFocus();
            return;
        }
        this.getCurrentUrl();
    }

    static getCurrentUrl() {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, activeTabs => {
            const [activeTab] = activeTabs;
            domainVisitTracker.onURLChange(activeTab.url);
        });
    }
}