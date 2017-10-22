import React, {Component} from 'react';
import Configuration from '../components/Configuration';
import {connect} from 'react-redux';

class ConfigurationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantifier: 'less than',
            time: '30',
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

    render() {
        return React.createElement(Configuration, {
            quantifier: this.state.quantifier,
            time: this.state.time,
            domain: this.state.domain,
            onDomainChange: (domain) => this.onDomainChange(domain),
            onQuantifierChange: (quantifier) => this.onQuantifierChange(quantifier),
            onTimeChange: (time) => this.onTimeChange(time)
        });
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationContainer);