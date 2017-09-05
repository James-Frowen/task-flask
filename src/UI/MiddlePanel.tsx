import * as React from "react";

export class MiddlePanel extends React.Component<{}, {}> {
    style = {
        backgroundColor: 'Blue',
    };
    render() {
        return (
            <div className="MiddlePanel" style={this.style}>
                MiddlePanel
            </div>
        );
    }
}
