import React, {Component} from 'react';
import Statistics from '../components/Statistics';
import {updateTodayPercentages} from '../actions/index';
import {connect} from 'react-redux';

class StatisticsContainer extends Component {
    componentDidMount() {
        this.props.updateTodayPercentages();
    }

    render() {
        return React.createElement(Statistics, {
            todayPercentages: this.props.todayPercentages
        });
    }
}

const mapStateToProps = (state) => {
    return {
        todayPercentages: state.todayPercentages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodayPercentages: () => {
            dispatch(updateTodayPercentages());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsContainer);