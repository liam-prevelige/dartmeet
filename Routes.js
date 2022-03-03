
   
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Chat from "./pages/Chat";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Chat" component={Chat} />
                </Switch>
            </Router>
        )
    }
}