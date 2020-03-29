import React from "react";
import { FlatList } from "react-native";
import GameItem from "./game-item";

const GameList = ({ games }) => {
  return (
    <FlatList
      data={games}
      renderItem={GameItem}
    />
  );
};

export default GameList;