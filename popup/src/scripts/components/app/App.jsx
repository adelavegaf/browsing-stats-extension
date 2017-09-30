import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                App status: {this.props.status}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status
    };
};

export default connect(mapStateToProps)(App);