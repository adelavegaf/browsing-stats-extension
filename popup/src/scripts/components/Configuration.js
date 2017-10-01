import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';

class Configuration extends Component {

    render() {
        return (
            <div>
                <Toggle label={this.props.extensionEnabled ? 'Tracking Enabled' : 'Tracking Disabled'}
                        toggled={this.props.extensionEnabled}
                        onToggle={(event, enabled) => this.props.onSetExtensionEnabled(enabled)}/>
            </div>
        )
    }
}

export default Configuration;