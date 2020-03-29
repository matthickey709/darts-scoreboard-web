import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import ClassicGame from "./gameModes/ClassicGame"
import history from './history'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Classic501" component={ClassicGame} />
                </Switch>
            </Router>
        )
    }
}