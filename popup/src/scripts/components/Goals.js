import React, {Component} from 'react';
import {
    FontIcon, IconButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from 'material-ui';
import './Goals.css';
import TimeUtils from '../../../../utils/TimeUtils';

const removeButtonStyle = {
    padding: 0,
    height: 18,
    width: 18
};

const removeIconStyle = {
    fontSize: 18,
};

export default class Goals extends Component {


    getTableRows() {
        return this.props.goalsStatus.map((goal) => {
            return (
                <TableRow key={goal._id} className={goal.isFailing ? 'failing-goal-row' : ''}>
                    <TableRowColumn className="remove-icon-column">
                        <IconButton iconStyle={removeIconStyle}
                                    style={removeButtonStyle}
                                    onClick={() => this.props.onRemoveGoal(goal._id)}>
                            <FontIcon className="material-icons" color="#790000">close</FontIcon>
                        </IconButton>
                    </TableRowColumn>
                    <TableRowColumn className="domain-column goals-column">{goal.hostname}</TableRowColumn>
                    <TableRowColumn className="goals-column">
                        {TimeUtils.getTimeInMinFromMs(goal.timeSpent).toFixed(0)}m
                    </TableRowColumn>
                    <TableRowColumn className="goals-column">
                        {goal.quantifier} {TimeUtils.getTimeInMinFromMs(goal.timeGoal)}m
                    </TableRowColumn>
                </TableRow>
            );
        });
    }

    getTable() {
        return (
            <div>
                <Table height="250px" selectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn className="remove-icon-column"/>
                            <TableHeaderColumn className="domain-column goals-column">Domain</TableHeaderColumn>
                            <TableHeaderColumn className="goals-column">Time Spent</TableHeaderColumn>
                            <TableHeaderColumn className="goals-column">Goal</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.getTableRows()}
                    </TableBody>
                </Table>
            </div>
        );
    }

    getNoGoalsMessage() {
        return (
            <div className="error-message">
                <span>You haven't set any daily goals</span>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.goalsStatus.length === 0 ? this.getNoGoalsMessage() : this.getTable()}
            </div>
        );
    }
}