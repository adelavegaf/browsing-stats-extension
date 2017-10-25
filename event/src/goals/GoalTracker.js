import Api from '../utils/api';
import TimeUtils from '../../../utils/TimeUtils';

const notifications = {};

export default class GoalTracker {
    static createNotification(title, message) {
        chrome.notifications.create('goal notification', {
            type: 'basic',
            iconUrl: './icon128.png',
            title: title,
            message: message
        });
    }

    static sendHalfwayNotification(goalStatus) {
        const halfTimeGoalInMin = TimeUtils.getTimeInMinFromMs(goalStatus.timeGoal) / 2;
        switch (goalStatus.quantifier) {
            case '<':
                this.createNotification(`${goalStatus.hostname} goal status`,
                    `Careful, you've spent ${halfTimeGoalInMin}m in this domain`);
                break;
            case '>':
                this.createNotification(`${goalStatus.hostname} goal status`,
                    `Keep up the good work, you've spent ${halfTimeGoalInMin}m in this domain!`);
                break;
        }
    }

    static sendCompletedNotification(goalStatus) {
        const timeGoalInMin = TimeUtils.getTimeInMinFromMs(goalStatus.timeGoal);
        switch (goalStatus.quantifier) {
            case '<':
                this.createNotification(`${goalStatus.hostname} goal failed`,
                    `Ouch, you've spent ${timeGoalInMin}m in this domain`);
                break;
            case '>':
                this.createNotification(`${goalStatus.hostname} goal status`,
                    `Great, you've completed your ${timeGoalInMin}m goal in this domain`);
                break;
        }
    }

    static trackGoal(hostname) {
        const sinceDate = new Date();
        sinceDate.setHours(0, 0, 0, 0);
        Api.getGoalStatus(sinceDate, hostname)
           .then((goalStatus) => {
               const percentage = goalStatus.timeSpent / goalStatus.timeGoal * 100;
               // Each day the time spent is reset to 0. Since we update at constant intervals, we will guarantee
               // that the notifications object will be updated correctly each day.
               if (percentage < 50 || !notifications[hostname]) {
                   notifications[hostname] = {halfway: false, completed: false};
               }

               const sentNotifications = notifications[hostname];

               if (percentage >= 100 && !sentNotifications.completed) {
                   this.sendCompletedNotification(goalStatus);
                   notifications[hostname].completed = true;
                   notifications[hostname].halfway = true;
               }
               else if (percentage >= 50 && !sentNotifications.halfway) {
                   this.sendHalfwayNotification(goalStatus);
                   notifications[hostname].halfway = true;
               }
           })
           .catch(error => {
               console.error(error);
           })
    }
}