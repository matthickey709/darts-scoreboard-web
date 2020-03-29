import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import ClassicGame from "./gameModes/ClassicGame";
import AroundTheWorld from "./gameModes/AroundTheWorld";
import history from './history';

const gameInfo = {
    classic501StartingScore: 501,
    classic301StartingScore: 301
};

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
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
            </Router>
        )
    }
}