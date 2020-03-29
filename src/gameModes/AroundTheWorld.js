import React from "react";
import { View, StyleSheet } from "react-native";
import AroundTheWorldInput from "./gameComponents/AroundTheWorldInput";

class AroundTheWorld extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            player1Status: {
                target: 0,
                targetText: "0"
            },
            player2Status: {
                target: 0,
                targetText: "0"
            }
        };

        this.increasePlayerScoreCallback = this.increasePlayerScoreCallback.bind(this);
        this.decreasePlayerScoreCallback = this.decreasePlayerScoreCallback.bind(this);

    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <AroundTheWorldInput
                    score={this.state.player1Status.targetText}
                    increaseScoreCallback={this.increasePlayerScoreCallback}
                    decreaseScoreCallback={this.decreasePlayerScoreCallback}
                    playerNumber={1}
                />
                <AroundTheWorldInput
                    score={this.state.player2Status.targetText}
                    increaseScoreCallback={this.increasePlayerScoreCallback}
                    decreaseScoreCallback={this.decreasePlayerScoreCallback}
                    playerNumber={2}
                />
            </View>
        );
    }

    handleTargetText(targetNumber) {
        // 21 means Bull, 22 means win, all other numbers are themselves
        if (targetNumber === 21) {
            return "BULL";
        } else if (targetNumber >= 22) {
            return "WINNER!!";
        } else {
            return targetNumber.toString();
        }
    }

    increasePlayerScoreCallback(playerNumber) {
        var newTarget;
        var textToDisplay;
        if (playerNumber === 1) {
            newTarget = this.state.player1Status.target + 1;
            textToDisplay = this.handleTargetText(newTarget);
            this.setState({
                player1Status: {
                    target: newTarget,
                    targetText: textToDisplay
                }
            });
        } else if (playerNumber === 2) {
            newTarget = this.state.player2Status.target + 1;
            textToDisplay = this.handleTargetText(newTarget);
            this.setState({
                player2Status: {
                    target: newTarget,
                    targetText: textToDisplay
                }
            });
        }
    }

    decreasePlayerScoreCallback(playerNumber) {
        var newTarget;
        var textToDisplay;
        if (playerNumber === 1) {
            newTarget = (this.state.player1Status.target - 1 >= 0 ? this.state.player1Status.target - 1 : 0);
            textToDisplay = this.handleTargetText(newTarget);
            this.setState({
                player1Status: {
                    target: newTarget,
                    targetText: textToDisplay
                }
            });
        } else if (playerNumber === 2) {
            newTarget = (this.state.player2Status.target - 1 >= 0 ? this.state.player2Status.target - 1 : 0);
            textToDisplay = this.handleTargetText(newTarget);
            this.setState({
                player2Status: {
                    target: newTarget,
                    targetText: textToDisplay
                }
            });
        }
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexWrap: 'wrap'
    }
});

export default AroundTheWorld;