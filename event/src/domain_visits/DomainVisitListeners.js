import DomainVisitTracker from './DomainVisitTracker';

const DOMAIN_TRACKER_ALARM = 'domainTrackerAlarm';
let domainVisitTracker = null;
let onTabActivatedListener = null;
let onTabUpdatedListener = null;
let onWindowFocusChangedListener = null;
let onAlarmListener = null;

export default class DomainVisitListeners {
    static start() {
        this.stop();
        domainVisitTracker = new DomainVisitTracker();
        onTabActivatedListener = () => this.onTabActivated();
        onTabUpdatedListener = () => this.onTabUpdated();
        onWindowFocusChangedListener = () => this.onWindowFocusChanged();
        onAlarmListener = () => this.onAlarm();
        chrome.tabs.onActivated.addListener(onTabActivatedListener);
        chrome.tabs.onUpdated.addListener(onTabUpdatedListener);
        chrome.windows.onFocusChanged.addListener(onWindowFocusChangedListener);
        chrome.alarms.create(DOMAIN_TRACKER_ALARM, {periodInMinutes: 1});
        chrome.alarms.onAlarm.addListener(onAlarmListener);
    }

    static stop() {
        domainVisitTracker = null;
        chrome.tabs.onActivated.removeListener(onTabActivatedListener);
        chrome.tabs.onUpdated.removeListener(onTabUpdatedListener);
        chrome.windows.onFocusChanged.removeListener(onWindowFocusChangedListener);
        chrome.alarms.onAlarm.removeListener(onAlarmListener);
        chrome.alarms.clear(DOMAIN_TRACKER_ALARM);
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

    static onAlarm() {
        domainVisitTracker.updateTimeSpentOnVisit();
    }
}