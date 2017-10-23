import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';

export default class Incentives extends Component {


    getTableRows() {
        return this.props.goals.map((goal) => {
            return (
                <TableRow>
                    <TableRowColumn>{goal.domain}</TableRowColumn>
                    <TableRowColumn>{goal.timeSpent / 60000}m</TableRowColumn>
                    <TableRowColumn>{goal.quantifier} {goal.timeGoal / 60000}m</TableRowColumn>
                </TableRow>
            );
        });
    }

    getTable() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Domain</TableHeaderColumn>
                        <TableHeaderColumn>Time Spent</TableHeaderColumn>
                        <TableHeaderColumn>Goal</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.getTableRows()}
                </TableBody>
            </Table>
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