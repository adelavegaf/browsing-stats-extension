import React, {Component} from 'react';
import ConfigurationContainer from '../containers/ConfigurationContainer';

import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import StatisticsContainer from '../containers/StatisticsContainer';
import {Card, CardText} from 'material-ui';
import './Extension.css';
import GoalsContainer from '../containers/GoalsContainer';

const chartIcon = <FontIcon className="material-icons">bubble_chart</FontIcon>;
const goalsIcon = <FontIcon className="material-icons">trending_up</FontIcon>;
const settingsIcon = <FontIcon className="material-icons">settings</FontIcon>;

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
                            onClick={() => this.props.onSelectedComponentChange('statistics', 0)}
                        />
                        <BottomNavigationItem
                            label="Goals"
                            icon={goalsIcon}
                            onClick={() => this.props.onSelectedComponentChange('goals', 1)}
                        />
                        <BottomNavigationItem
                            label="Settings"
                            icon={settingsIcon}
                            onClick={() => this.props.onSelectedComponentChange('settings', 2)}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }

    render() {
        switch (this.props.extensionComponent) {
            case 'statistics':
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
            case 'goals':
                return (
                    <div>
                        <Card style={cardStyle}>
                            <CardText>
                                <div className="card-title">
                                    <span>Domain Usage Daily Goals Tracker</span>
                                </div>
                                <GoalsContainer/>
                                <div className="card-footer">
                                    Head over to the settings tab to add new goals.
                                </div>
                            </CardText>
                        </Card>
                        {this.getBottomNav()}
                    </div>
                );
            case 'settings':
                return (
                    <div>
                        <Card style={cardStyle}>
                            <CardText>
                                <div className="card-title">
                                    <span>Add a New Goal</span>
                                </div>
                                <ConfigurationContainer/>
                            </CardText>
                        </Card>
                        {this.getBottomNav()}
                    </div>
                );
        }
    }
}