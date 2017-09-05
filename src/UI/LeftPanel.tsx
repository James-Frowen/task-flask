import * as React from "react";

export class LeftPanel extends React.Component<{}, {}> {
    style = {
        backgroundColor: 'Red',
    };
    render() {
        return (
            <div className="LeftPanel" style={this.style}>
                LeftPanel
            </div>
        );
    }
}
