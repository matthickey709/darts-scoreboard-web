import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import "../../global";

class CricketInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.row}>  
            </View>
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
    ScoringLevelText: {
        fontSize: 36,
        textTransform: "capitalize",
        color: "white",
        textAlign: "center",
        backgroundColor: global.dartboardCork,
        padding: 5,
        borderColor: global.mainTextColor,
        borderWidth: "1px"
    },
    playerDataText: {
        fontSize: 36,
        textTransform: "capitalize",
        color: global.mainTextColor,
        textAlign: "center",
        backgroundColor: global.dartboardCork,
        padding: 20
    }
});

export default CricketInput;