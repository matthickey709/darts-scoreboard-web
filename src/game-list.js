import React from "react";
import { FlatList } from "react-native";
import GameItem from "./game-item";

const GameList = ({ users }) => {
  return (
    <FlatList
      data={users}
      renderItem={GameItem}
    />
  );
};

export default GameList;