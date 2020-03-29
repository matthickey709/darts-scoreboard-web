import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

class ClassicGame extends React.Component {
  state = {
    startingScore: 999,
    player1Status: {
      score: 999,
      legs: 0,
      sets: 0
    },
    player2Status: {
      score: 999,
      legs: 0,
      sets: 0
    }
  };

  componentDidMount() {
    this.setState({
      startingScore: this.props.startingScore,
      player1Status: {
        score: this.props.startingScore,
        legs: 0,
        sets: 0
      },
      player2Status: {
        score: this.props.startingScore,
        legs: 0,
        sets: 0
      }
    });
  }
  
  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList />
      </View>
    );
  }

  updatePlayerScore(recordedScore, isPlayer1Turn) {
    var playerScore;

    if (isPlayer1Turn) {
      // TODO
    } else {
      // TODO
    }

    // If player wins, increase their legs/sets accordingly
    if (playerScore === 0) {
      this.updateLegsAndSets(isPlayer1Turn);
      this.setState({player1Status: {
        score: this.state.startingScore
      }});
      this.setState({player2Status: {
        score: this.state.startingScore
      }});
    }
  }

  updateLegsAndSets(isPlayer1Turn) {
    var legCount;
    if (isPlayer1Turn) {
      legCount = this.state.player1Status.sets;
      if (this.state.player1Status.legs === 2) {
        // If player has 2 legs won, increase their sets.
        this.setState({
          player1Status: {
            sets: legCount + 1,
            legs: 0
          },
          player2Status: {
            legs: 0
          }
        });
      } else {
        // Increase player's leg count
        this.setState({
          player1Status: {
            legs: legCount + 1
          }
        });
      }
    } else {
      legCount = this.state.player2Status.sets;
      if (this.state.player2Status.legs === 2) {
        // If player has 2 legs won, increase their sets.
        this.setState({
          player1Status: {
            legs: 0
          },
          player2Status: {
            sets: legCount + 1,
            legs: 0
          }
        });
      } else {
        // Increase player's leg count
        this.setState({
          player2Status: {
            legs: legCount + 1
          }
        });
      }
    }
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  scoreItemStyle: {
    height: 100,
    width: '50%'
  }
});

export default ClassicGame;