import React, {Component} from 'react';
import Goals from '../components/Goals';
import {getGoalsStatus, removeGoal} from '../actions/index';
import {connect} from 'react-redux';

class GoalsContainer extends Component {
    componentDidMount() {
        this.props.getGoalsStatus();
    }

    render() {
        return React.createElement(Goals, {
            goalsStatus: this.props.goalsStatus,
            onRemoveGoal: this.props.removeGoal
        });
    }
}

const mapStateToProps = (state) => {
    return {
        goalsStatus: state.goalsStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGoalsStatus: (sinceDate) => {
            dispatch(getGoalsStatus(sinceDate));
        },
        removeGoal: (id) => {
            dispatch(removeGoal(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);