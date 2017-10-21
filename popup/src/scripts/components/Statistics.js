import React, {Component} from 'react';
import {Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';
import './Statistics.css';

const PIE_COLORS = ['#fff64f', '#ffc400', '#ff197a', '#00bcd4', '#cddc39'];

export default class Statistics extends Component {

    getPieData() {
        return this.props.todayPercentages.map((e, index) => {
            return {
                name: e.hostname,
                value: Number(parseFloat(e.percentage * 100).toFixed(0)),
                fill: PIE_COLORS[index]
            };
        });
    }

    formatTooltipValue(value) {
        return value + '%';
    }

    getPieChart() {
        return (
            <ResponsiveContainer height={300}>
                <PieChart>
                    <Pie dataKey="value"
                         data={this.getPieData()}
                         isAnimationActive={true}
                         innerRadius={60}
                         outerRadius={80}
                    />
                    <Tooltip formatter={this.formatTooltipValue}/>
                    <Legend verticalAlign="bottom"/>
                </PieChart>
            </ResponsiveContainer>
        );
    }

    getNoDataMessage() {
        return (
            <div className="error-message">
                <p>Oops seems we don't have any data to display</p>
                <p>Visit a couple websites and check again!</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.todayPercentages.length === 0 ? this.getNoDataMessage() : this.getPieChart()}
            </div>
        );
    }
}