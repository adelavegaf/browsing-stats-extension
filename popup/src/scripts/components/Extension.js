import React, {Component} from 'react';
import ConfigurationContainer from '../containers/ConfigurationContainer';

import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import StatisticsContainer from '../containers/StatisticsContainer';

const settingsIcon = <FontIcon className="material-icons">settings</FontIcon>;
const chartIcon = <FontIcon className="material-icons">bubble_chart</FontIcon>;

export default class Extension extends Component {

    getBottomNav() {
        return (
            <div>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.props.selectedComponentIndex}>
                        <BottomNavigationItem
                            label="Stats"
                            icon={chartIcon}
                            onClick={() => this.props.onSelectedComponentChange('stats', 0)}
                        />
                        <BottomNavigationItem
                            label="Settings"
                            icon={settingsIcon}
                            onClick={() => this.props.onSelectedComponentChange('settings', 1)}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }

    render() {
        switch (this.props.extensionComponent) {
            case 'settings':
                return (
                    <div>
                        <ConfigurationContainer/>
                        {this.getBottomNav()}
                    </div>
                );
            case 'stats':
                return (
                    <div>
                        <StatisticsContainer/>
                        {this.getBottomNav()}
                    </div>
                );
        }
    }
}