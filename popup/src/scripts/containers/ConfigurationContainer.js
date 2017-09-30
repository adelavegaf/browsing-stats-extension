import React from 'react';
import Configuration from '../components/Configuration';
import {setExtensionEnabled} from '../actions/index';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        extensionEnabled: state.extensionEnabled
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetExtensionEnabled: (enabled) => {
            dispatch(setExtensionEnabled(enabled));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);