import * as React from "react";

export class RightPanel extends React.Component<{}, {}> {
    style = {
        backgroundColor: 'Green',
    };
    render() {
        return (
            <div className="RightPanel" style={this.style}>
                RightPanel
            </div>
        );
    }
}
