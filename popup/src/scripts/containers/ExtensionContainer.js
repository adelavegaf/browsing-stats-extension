import React, {Component} from 'react';
import Extension from '../components/Extension';

export default class ExtensionContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            extensionComponent: 'stats',
            selectedComponentIndex: 0
        };
    }

    onSelectedComponentChange(component, index) {
        this.setState({extensionComponent: component, selectedComponentIndex: index});
    }


    render() {
        return React.createElement(Extension, {
            extensionComponent: this.state.extensionComponent,
            selectedComponentIndex: this.state.selectedComponentIndex,
            onSelectedComponentChange: (component, index) => this.onSelectedComponentChange(component, index)
        });
    }
}