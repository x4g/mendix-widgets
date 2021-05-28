import { Component, createElement } from "react";

export class ListAttributeValues extends Component {
    renderedList = () => {
        const { data, attributes } = this.props;
        if (data.status !== "available") return null;
        else return data.items.map(item => <li>{attributes.get(item).value}</li>);
    };

    render() {
        return <div>{this.renderedList()}</div>;
    }
}
