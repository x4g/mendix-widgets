import { Component, createElement } from "react";

export class Client extends Component {
    callMicroflow = e => {
        mx.data.action({
            params: {
                actionname: "MyFirstModule.testMF"
            },
            callback: function (obj) {
                alert("callback function");
            },
            error: function (error) {
                alert(error.message);
            }
        });
    };

    callNanoflow = e => {
        mx.data.callNanoflow({
            nanoflow: "MyFirstModule.testNF",
            context: this.mxcontext,
            callback: function (result) {
                alert("Nanoflow completed with result ");
            },
            error: function (error) {
                alert(error.message);
            }
        });
    };
    
    render() {
        return <div>mx client functions</div>;
    }
}
