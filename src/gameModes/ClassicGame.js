import React from "react";
import { View, StyleSheet } from "react-native";
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

    this.onSubmitScoreCallback = this.onSubmitScoreCallback.bind(this);
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
          startScoreInput={this.onSubmitScoreCallback}
        />
        <ClassicPlayerScoreboard
          playerNumber={2}
          legsValue={this.state.player2Status.legs}
          setsValue={this.state.player2Status.sets}
          scoreValue={this.state.player2Status.score}
          startScoreInput={this.onSubmitScoreCallback}
        />
      </View>
    );
  }

  isInteger(n) {
    return n === parseInt(n, 10);
  }

  onSubmitScoreCallback(recordedScore, playerNumber) {
    this.updatePlayerScore(recordedScore, playerNumber === 1);
  }

  updatePlayerScore(recordedScore, isPlayer1Turn) {
    var playerScore;
    var status;
    if (this.isValidMove(recordedScore, isPlayer1Turn)) {
      if (isPlayer1Turn) {
        status = { ...this.state.player1Status };
        status.score = status.score - recordedScore;
        this.setState({ player1Status: status });
        playerScore = this.state.player1Status.score;
      } else {
        status = { ...this.state.player2Status };
        status.score = status.score - recordedScore;
        this.setState({ player2Status: status });
        playerScore = this.state.player2Status.score;
      }
    }

    // If player wins, increase their legs / sets accordingly
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
    if (recordedScore > 180 || recordedScore < 0) {
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
    var statusOne = { ...this.player1Status };
    var statusTwo = { ... this.player2Status };
    if (isPlayer1Turn) {
      legCount = this.state.player1Status.legs;
      if (legCount === 2) {
        // If player gets to 3 legs won, increase their sets, reset all legs.
        statusOne.sets = statusOne.sets + 1;
        statusOne.legs = 0;
        statusTwo.legs = 0;
        this.setState({ player1Status: statusOne, playerTwoStatus: statusTwo });
      } else {
        // Increase player's leg count
        statusOne.legs = legCount + 1;
        this.setState({ player1Status: statusOne });
      }
    } else {
      legCount = this.state.player2Status.legs;
      if (this.state.player2Status.legs === 2) {
        // If player gets to 3 legs won, increase their sets, reset all legs.
        statusOne.legs = 0;
        statusTwo.legs = 0;
        statusTwo.sets = statusTwo.sets + 1;
        this.setState({ player1Status: statusOne, player2Status: statusTwo });
      } else {
        // Increase player's leg count
        statusTwo.legs = legCount + 1;
        this.setState({ player2Status: statusTwo });
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