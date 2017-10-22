import React, {Component} from 'react';
import {RaisedButton, SelectField, TextField, MenuItem} from 'material-ui';
import './Configuration.css';
import ButtonStyles from '../utils/ButtonStyles';

class Configuration extends Component {
    render() {
        return (
            <div>
                <div className="incentive-text">
                    <span>I want to spend </span>
                    <span className="placeholder">{this.props.quantifier}</span>
                    <span> </span>
                    <span className="placeholder">{this.props.time}</span>
                    <span> minutes in </span>
                    <span className="placeholder">{this.props.domain ? this.props.domain : 'www.example.com'}</span>
                    <span> each day</span>
                </div>
                <div>
                    <SelectField value={this.props.quantifier}
                                 floatingLabelText="Quantifier"
                                 fullWidth={true}
                                 onChange={(e, k, value) => this.props.onQuantifierChange(value)}>
                        <MenuItem value="less than" primaryText="less than"/>
                        <MenuItem value="more than" primaryText="more than"/>
                    </SelectField>
                </div>
                <div>
                    <SelectField value={this.props.time}
                                 floatingLabelText="Time"
                                 fullWidth={true}
                                 onChange={(e, k, value) => this.props.onTimeChange(value)}>
                        <MenuItem value="30" primaryText="30 minutes"/>
                        <MenuItem value="60" primaryText="60 minutes"/>
                        <MenuItem value="120" primaryText="120 minutes"/>
                    </SelectField>
                </div>
                <div>
                    <TextField floatingLabelText="Domain"
                               floatingLabelFixed={true}
                               hintText="www.example.com"
                               fullWidth={true}
                               onChange={(e, value) => this.props.onDomainChange(value)}/>
                </div>
                <div className="center">
                    <RaisedButton label="Add" secondary={true} labelStyle={ButtonStyles.getSecondaryButtonStyles()}/>
                </div>
            </div>
        )
    }
}

export default Configuration;