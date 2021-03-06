import React from "react";
import { Link } from 'react-router-dom';
import { View, Image, Text, StyleSheet } from "react-native";

const GameItem = ({ item: game }) => {

  return (
    <Link to={game.path} style={{ textDecoration: 'none' }}>
      <View style={styles.row}>
        <Image style={styles.rowIcon} source={require(`${game.icon}`)} />
        <View style={styles.rowData}>
          <Text style={styles.rowDataText}>{game.name}</Text>
          <Text style={styles.rowDataSubText}>{game.description}</Text>
        </View>
      </View>
    </Link>
  );
};

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
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20,
    borderRadius: "50%",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)"
  },
  rowData: {
    flex: 1
  },
  rowDataText: {
    fontSize: 15,
    textTransform: "capitalize",
    color: "#4b4b4b"
  },
  rowDataSubText: {
    fontSize: 13,
    opacity: 0.8,
    color: "#a8a689",
    marginTop: 4
  }
});

export default GameItem;