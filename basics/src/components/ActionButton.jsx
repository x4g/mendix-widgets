import { Component, createElement } from "react";

export class ActionButton extends Component {
    callAction = e => {
        const { action } = this.props;
        if (action.canExecute) action.execute();
    };

    render() {
        return (
            <div>
                <button onClick={this.callAction}>{this.props.title}</button>
            </div>
        );
    }
}
