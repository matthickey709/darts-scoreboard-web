import React from "react";
import { View, StyleSheet } from "react-native";
import CricketInput from "./gameComponents/CricketInput";

class Cricket extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <CricketInput  
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
       
});

export default Cricket;