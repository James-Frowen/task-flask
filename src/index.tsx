// **** Client side entry point ****
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Root } from "./Root";

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import { Header } from "./components/Header";
import { CreateTask } from "./pages/CreateTask";

const app = document.getElementById('app');

if (app === null) {
    throw new Error('Can not find element with id app')
}

ReactDOM.render(
    <Router basename="/">
        <Root>
            {console.log(location.href)}
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Home}></Route>
                <Route exact={true} path="/CreateTask" component={CreateTask}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Root>
    </Router>,
    app
);