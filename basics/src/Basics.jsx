import { Component, createElement, useEffect } from "react";

import { ListAttributeValues } from "./components/ListAttributeValues";
import { ActionButton } from "./components/ActionButton";
import { EnumMap } from "./components/EnumMap";

import { EnumMapClient } from "./components/EnumMapClient";

import "./ui/Basics.css";

export default class Basics extends Component {

    render() {
        // const { data, attributeList, enumList, action } = this.props;
        const {data} = this.props;
        return (
            <div>
                {/* <ActionButton title="Call an action" action={action} />
                <ListAttributeValues data={data} attributes={attributeList} /> */}
                {/* <EnumMapClient /> */}
                <EnumMap data={data} />
            </div>
        );
    }
}
