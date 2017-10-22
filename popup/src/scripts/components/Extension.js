import React, {Component} from 'react';
import ConfigurationContainer from '../containers/ConfigurationContainer';

import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import StatisticsContainer from '../containers/StatisticsContainer';
import {Card, CardText} from 'material-ui';
import './Extension.css';

const settingsIcon = <FontIcon className="material-icons">settings</FontIcon>;
const chartIcon = <FontIcon className="material-icons">bubble_chart</FontIcon>;

const cardStyle = {
    'marginTop': '10px',
    'marginBottom': '10px'
};

export default class Extension extends Component {

    getBottomNav() {
        return (
            <div>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.props.selectedComponentIndex}>
                        <BottomNavigationItem
                            label="Statistics"
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
                        <Card style={cardStyle}>
                            <CardText>
                                <div className="card-title">
                                    <span>Add an Incentive</span>
                                </div>
                                <ConfigurationContainer/>
                            </CardText>
                        </Card>
                        {this.getBottomNav()}
                    </div>
                );
            case 'stats':
                return (
                    <div>
                        <Card style={cardStyle}>
                            <CardText>
                                <div className="card-title">
                                    <span>Websites You Have Spent The Most Time On Today</span>
                                </div>
                                <StatisticsContainer/>
                                <div className="card-footer">
                                    <span>
                                        For advanced statistics visit our <a href="https://webdrain.herokuapp.com"
                                                                             target="_blank"> web app</a>
                                    </span>
                                </div>
                            </CardText>
                        </Card>
                        {this.getBottomNav()}
                    </div>
                );
        }
    }
}