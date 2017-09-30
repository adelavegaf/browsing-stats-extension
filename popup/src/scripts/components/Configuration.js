import React, {Component} from 'react';

class Configuration extends Component {

    render() {
        return (
            <div>
                The extension is {this.props.extensionEnabled ? 'enabled' : 'disabled'}
                <button onClick={() => this.props.onSetExtensionEnabled(true)}>Toggle</button>
            </div>
        )
    }
}

export default Configuration;