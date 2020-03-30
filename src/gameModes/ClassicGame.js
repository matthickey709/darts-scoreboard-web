import React from "react";
import { View, StyleSheet, Button } from "react-native";
import ClassicPlayerScoreboard from './gameComponents/ClassicPlayerScoreboard';

class ClassicGame extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
      },
    };
  }

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
        <ClassicPlayerScoreboard
          playerNumber={1}
          legsValue={this.state.player1Status.legs}
          setsValue={this.state.player1Status.sets}
          scoreValue={this.state.player1Status.score}
          startScoreInput={this.showInputModalCallback}
        />
        <ClassicPlayerScoreboard
          playerNumber={2}
          legsValue={this.state.player2Status.legs}
          setsValue={this.state.player2Status.sets}
          scoreValue={this.state.player2Status.score}
          startScoreInput={this.showInputModalCallback}
        />
      </View>
    );
  }

  showInputModalCallback(playerNumber) {
  }

  updatePlayerScore(recordedScore, isPlayer1Turn) {
    var playerScore;
    if (this.isValidMove(recordedScore, isPlayer1Turn)) {
      if (isPlayer1Turn) {
        this.setState({
          player1Status: {
            score: this.state.player1Status.score - recordedScore
          }
        });
        playerScore = this.state.player1Status.score;
      } else {
        this.setState({
          player2Status: {
            score: this.state.player2Status.score - recordedScore
          }
        });
        playerScore = this.state.player1Status.score;
      }
    }

    // If player wins, increase their legs/sets accordingly
    if (playerScore === 0) {
      this.updateLegsAndSets(isPlayer1Turn);
      this.setState({
        player1Status: {
          score: this.state.startingScore
        }
      });
      this.setState({
        player2Status: {
          score: this.state.startingScore
        }
      });
    }
  }

  isValidMove(recordedScore, isPlayer1Turn) {
    if (recordedScore > 180) {
      return false;
    }
    if (isPlayer1Turn) {
      // Score cannot be greater than 180, and score cannot bring you to a negative number
      if (this.state.player1Status.score - recordedScore < 0) {
        return false;
      }
    } else {
      if (this.state.player2Status.score - recordedScore < 0) {
        return false;
      }
    }

    return true;
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
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  scoreItemStyle: {
    height: 100,
    width: '50%'
  }
});

export default ClassicGame;