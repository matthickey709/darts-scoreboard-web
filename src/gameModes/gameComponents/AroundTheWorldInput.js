import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import "../../global";

class AroundTheWorldInput extends React.Component {
    render() {
        return (
            <View style={styles.row}>
                <View style={styles.rowData}>
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
            </View>
        );
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginBottom: 5,
        backgroundColor: "#F9DFBC",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.1)"
    },
    rowData: {
        flex: 1
    },
    scoreDataText: {
        fontSize: 27,
        textTransform: "capitalize",
        color: "#4b4b4b",
        textAlign: "center",
    }
});

export default AroundTheWorldInput;