import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import './Goals.css';

export default class Goals extends Component {


    getTableRows() {
        return this.props.goals.map((goal, index) => {
            return (
                <TableRow key={index} className={goal.isFailing ? 'failing-goal-row' : ''}>
                    <TableRowColumn className="domain-column goals-column">{goal.domain}</TableRowColumn>
                    <TableRowColumn className="goals-column">{goal.timeSpent / 60000}m</TableRowColumn>
                    <TableRowColumn className="goals-column">{goal.quantifier} {goal.timeGoal / 60000}m</TableRowColumn>
                </TableRow>
            );
        });
    }

    getTable() {
        return (
            <div>
                <Table height="250px">
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
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
                {this.props.goals.length === 0 ? this.getNoGoalsMessage() : this.getTable()}
            </div>
        );
    }
}