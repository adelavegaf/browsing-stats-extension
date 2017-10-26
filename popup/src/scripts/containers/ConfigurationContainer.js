import React, {Component} from 'react';
import Configuration from '../components/Configuration';
import {connect} from 'react-redux';
import {addGoal} from '../actions/index';
import {THIRTY_MINUTES_IN_MS} from '../../../../utils/TimeUtils';

const MAX_NUM_DOMAIN_CHARACTERS = 52;

class ConfigurationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantifier: '<',
            time: THIRTY_MINUTES_IN_MS,
            domain: '',
            errorText: ''
        };
    }

    onDomainChange(domain) {
        if (domain.length <= MAX_NUM_DOMAIN_CHARACTERS) {
            this.setState({domain: domain});
        }
    }

    onQuantifierChange(quantifier) {
        this.setState({quantifier: quantifier});
    }

    onTimeChange(time) {
        this.setState({time: time});
    }

    onAddGoal() {
        if (!this.state.domain) {
            this.setState({errorText: 'Please provide a value'});
            return;
        }
        this.props.addGoal(this.state.domain, this.state.quantifier, this.state.time);
    }

    render() {
        return React.createElement(Configuration, {
            quantifier: this.state.quantifier,
            time: this.state.time,
            domain: this.state.domain,
            errorText: this.state.errorText,
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