import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import ClassicGame from "./gameModes/ClassicGame";
import AroundTheWorld from "./gameModes/AroundTheWorld";
import Header from './header';

const gameInfo = {
    classic501StartingScore: 501,
    classic301StartingScore: 301
};

export default class Routes extends Component {
    render() {
        return (
            <HashRouter basename={window.location.pathname || ''}>
                <Header title="Dart Games" />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/Classic501"
                        render={(props) => <ClassicGame {...props} startingScore={gameInfo.classic501StartingScore} />}
                    />
                    <Route
                        path="/Classic301"
                        render={(props) => <ClassicGame {...props} startingScore={gameInfo.classic301StartingScore} />}
                    />
                    <Route path="/AroundTheWorld" component={AroundTheWorld} />
                </Switch>
            </HashRouter>
        )
    }
}