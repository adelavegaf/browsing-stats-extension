import React, {Component} from 'react';
import Incentives from '../components/Incentives';


export default class IncentivesContainer extends Component {
    constructor(props) {
        super(props);
        // TODO(adelavega): create loading state.
        this.state = {
            goals: [{domain: 'facebook.com', timeSpent: 1800000, timeGoal: 3600000}]
        };
    }

    render() {
        return React.createElement(Incentives, {
            goals: this.state.goals
        });
    }
}
