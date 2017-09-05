import * as React from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 center-children">
                        <h2 style={{ padding: "50px" }}>404 Not Found</h2>
                    </div>
                </div>
            </div>
        );
    }
}