import React, {Component} from 'react';
import {RaisedButton, SelectField, TextField, MenuItem} from 'material-ui';
import './Configuration.css';
import ButtonStyles from '../utils/ButtonStyles';
import {ONE_HUNDRED_TWENTY_MINUTES_IN_MS, SIXTY_MINUTES_IN_MS, THIRTY_MINUTES_IN_MS} from '../utils/TimeUtils';
import TimeUtils from '../utils/TimeUtils';

class Configuration extends Component {

    getQuantifierInWords() {
        return this.props.quantifier === '<' ? 'less than' : 'more than';
    }

    render() {
        return (
            <div>
                <div className="goals-text">
                    <span>I want to spend </span>
                    <span className="placeholder">{this.getQuantifierInWords()}</span>
                    <span> </span>
                    <span className="placeholder">{TimeUtils.getTimeInMinFromMs(this.props.time)}</span>
                    <span> minutes in </span>
                    <span className="placeholder">{this.props.domain ? this.props.domain : 'www.example.com'}</span>
                    <span> each day</span>
                </div>
                <div className="settings-font">
                    <SelectField value={this.props.quantifier}
                                 floatingLabelText="Quantifier"
                                 fullWidth={true}
                                 onChange={(e, k, value) => this.props.onQuantifierChange(value)}>
                        <MenuItem value="<" primaryText="less than"/>
                        <MenuItem value=">" primaryText="more than"/>
                    </SelectField>
                </div>
                <div className="settings-font">
                    <SelectField value={this.props.time}
                                 floatingLabelText="Time"
                                 fullWidth={true}
                                 onChange={(e, k, value) => this.props.onTimeChange(value)}>
                        <MenuItem value={THIRTY_MINUTES_IN_MS} primaryText="30 minutes"/>
                        <MenuItem value={SIXTY_MINUTES_IN_MS} primaryText="60 minutes"/>
                        <MenuItem value={ONE_HUNDRED_TWENTY_MINUTES_IN_MS} primaryText="120 minutes"/>
                    </SelectField>
                </div>
                <div className="settings-font">
                    <TextField floatingLabelText="Domain"
                               floatingLabelFixed={true}
                               hintText="www.example.com"
                               fullWidth={true}
                               onChange={(e, value) => this.props.onDomainChange(value)}/>
                </div>
                <div className="goals-functionality-text">
                    <span>We will send notifications throughout the day to tell you about your goal's status</span>
                </div>
                <div className="center">
                    <RaisedButton
                        label="Add"
                        secondary={true}
                        labelStyle={ButtonStyles.getSecondaryButtonStyles()}
                        onClick={() => this.props.onAddGoal()}/>
                </div>
            </div>
        )
    }
}

export default Configuration;