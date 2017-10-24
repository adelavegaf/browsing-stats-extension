import React, {Component} from 'react';
import Incentives from '../components/Incentives';


export default class IncentivesContainer extends Component {
    constructor(props) {
        super(props);
        // TODO(adelavega): create loading state.
        const goals = [];
        goals.push({domain: 'leetcode.com', timeSpent: 1800000, timeGoal: 3600000, quantifier: '>', isFailing: true});
        for (let i = 0; i < 20; i++) {
            goals.push(
                {domain: 'facebook.com', timeSpent: 1800000, timeGoal: 3600000, quantifier: '<', isFailing: false});
        }
        this.state = {
            goals: goals
        };
    }

    render() {
        return React.createElement(Incentives, {
            goals: this.state.goals
        });
    }
}
