// **** Client side entry point ****
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LeftPanel } from "./UI/LeftPanel";
import { RightPanel } from "./UI/RightPanel";
import { MiddlePanel } from "./UI/MiddlePanel";

const app = document.getElementById('app');

if (app === null) {
    throw new Error('Can not find element with id app')
}

ReactDOM.render((
    <div className="content" >
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
    </div>
),
    document.getElementById('app')
);