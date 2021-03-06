import React from "react";
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import GameList from "./game-list";
import dartGames from "./data/dartGames.json";

class Home extends React.Component {
  state = {
    games: dartGames,
    loading: true
  };
  componentDidMount() {
    this.getGames();
  }

  async getGames() {
      this.setState({games: dartGames, loading: false});
  }

  render() {
    return (
        <ScrollView noSpacer={true} noScroll={true} style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator
            style={[styles.centering]}
            color="#E3292E"
            size="large"
          />
        ) : (
          <GameList games={this.state.games} />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  },
});

export default Home;