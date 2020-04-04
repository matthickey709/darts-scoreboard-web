import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import "../../global";

class AroundTheWorldInput extends React.Component {
    render() {
        return (
            <View style={styles.column}>
                <Button
                    title="Increase"
                    onPress={() => this.props.increaseScoreCallback(this.props.playerNumber)}
                    color={global.dartboardGreen}
                />
                <Text style={styles.scoreDataText}>{this.props.score}</Text>
                <Button
                    title="Decrease"
                    onPress={() => this.props.decreaseScoreCallback(this.props.playerNumber)}
                    color={global.dartboardRed}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    column: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
    },
    rowData: {
        flex: 1
    },
    scoreDataText: {
        fontSize: 36,
        textTransform: "capitalize",
        color: global.mainTextColor,
        textAlign: "center",
    }
});

export default AroundTheWorldInput;