import { Component, createElement } from "react";

export class EnumMapClient extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            enuMap: []
        }
    }
    
    componentDidMount() {
        this.getEnumMap();
    }
    
    getEnumMap = () => {
        let this_ = this;
        mx.data.get({
            guid: "12666373951979922",
            callback: (obj) => {
                this_.setState({enuMap: obj.getEnumMap('EnumValue')})
            },
            error: function (err) {
                alert(err);
            }
        });
    };
    
    renderEnumMap = () => {
        return this.state.enuMap.map(enu => {return <li>{enu.key}:{enu.caption}</li>})
    };
    
    render() {
        return <div>Enum Map:{this.renderEnumMap()}</div>
    }
}
