import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Dimensions } from "react-native";
import "../../global";

class ClassicPlayerScoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerNumber: props.playerNumber,
            enteredScore: ""
        }

        this.submitAndClear = this.submitAndClear.bind(this);
    }

    submitAndClear() {
        this.props.startScoreInput(this.state.enteredScore, this.state.playerNumber);
        this.setState({ enteredScore: "" });
    }

    render() {
        return (
            <View styles={styles.column}>
                <View style={styles.row}>
                    <Text style={styles.playerDataText}>Player {this.state.playerNumber}</Text>
                    <Text style={styles.setsLegsDataText}>{this.props.legsValue}</Text>
                    <Text style={styles.setsLegsDataText}>{this.props.setsValue}</Text>
                    <Text style={styles.scoreDataText}>{this.props.scoreValue}</Text>
                </View>
                <View styles={styles.row}>
                    <TextInput
                        keyboardType="number-pad"
                        style={styles.input}
                        value={this.state.enteredScore}
                        placeholder="Enter round score..."
                        onChangeText={(text) => this.setState({ enteredScore: text })}
                    />
                    <Button
                        title="Submit"
                        color={global.dartboardGreen}
                        onPress={() => this.submitAndClear()}
                    />
                </ View>

            </View >
        );
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
    },
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
        color: "white",
        textAlign: "center",
        backgroundColor: global.dartboardRed,
        padding: 5,
        borderColor: global.mainTextColor,
        borderWidth: "1px"
    },
    setsLegsDataText: {
        fontSize: 36,
        textTransform: "capitalize",
        color: "white",
        textAlign: "center",
        backgroundColor: global.dartboardGreen,
        padding: 5,
        borderColor: global.mainTextColor,
        borderWidth: "1px"
    },
    playerDataText: {
        fontSize: 36,
        textTransform: "capitalize",
        color: global.mainTextColor,
        textAlign: "center",
        backgroundColor: global.dartboardCork
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: global.dartboardGreen,
        fontSize: 36,
        color: global.mainTextColor,
        textTransform: "capitalize",
        textAlign: "center",
        width: Dimensions.get('window').width
    }
});

export default ClassicPlayerScoreboard;