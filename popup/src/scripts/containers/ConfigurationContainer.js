import React, {Component} from 'react';
import Configuration from '../components/Configuration';
import {connect} from 'react-redux';
import {addGoal} from '../actions/index';
import {THIRTY_MINUTES_IN_MS} from '../../../../utils/TimeUtils';

class ConfigurationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantifier: '<',
            time: THIRTY_MINUTES_IN_MS,
            domain: ''
        };
    }

    onDomainChange(domain) {
        this.setState({domain: domain});
    }

    onQuantifierChange(quantifier) {
        this.setState({quantifier: quantifier});
    }

    onTimeChange(time) {
        this.setState({time: time});
    }

    onAddGoal() {
        this.props.addGoal(this.state.domain, this.state.quantifier, this.state.time);
    }

    render() {
        return React.createElement(Configuration, {
            quantifier: this.state.quantifier,
            time: this.state.time,
            domain: this.state.domain,
            onDomainChange: (domain) => this.onDomainChange(domain),
            onQuantifierChange: (quantifier) => this.onQuantifierChange(quantifier),
            onTimeChange: (time) => this.onTimeChange(time),
            onAddGoal: () => this.onAddGoal()
        });
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addGoal: (hostname, quantifier, timeGoal) => {
            dispatch(addGoal(hostname, quantifier, timeGoal));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationContainer);