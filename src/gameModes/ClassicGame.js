import React from "react";
import { View, StyleSheet } from "react-native";
import ClassicPlayerScoreboard from './gameComponents/ClassicPlayerScoreboard';

class ClassicGame extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      startingScore: props.startingScore,
      player1Status: {
        score: props.startingScore,
        legs: 0,
        sets: 0
      },
      player2Status: {
        score: props.startingScore,
        legs: 0,
        sets: 0
      },
    };

    this.onSubmitScoreCallback = this.onSubmitScoreCallback.bind(this);
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
    var status;
    if (this.isValidMove(recordedScore, isPlayer1Turn)) {
      if (isPlayer1Turn) {
        status = { ...this.state.player1Status };
        status.score = status.score - recordedScore;
        this.setState({ player1Status: status });
      } else {
        status = { ...this.state.player2Status };
        status.score = status.score - recordedScore;
        this.setState({ player2Status: status });
      }
    }

    // If player wins, increase their legs / sets accordingly
    if (status.score === 0) {
      var statusOne = { ...this.state.player1Status };
      var statusTwo = { ...this.state.player2Status };
      statusOne.score = this.state.startingScore;
      statusTwo.score = this.state.startingScore;
      this.setState(
        { player1Status: statusOne, player2Status: statusTwo },
        () => this.updateLegsAndSets(isPlayer1Turn));
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
    var statusOne = { ...this.state.player1Status };
    var statusTwo = { ... this.state.player2Status };
    if (isPlayer1Turn) {
      if (statusOne.legs === 2) {
        // If player gets to 3 legs won, increase their sets, reset all legs.
        statusOne.sets += 1;
        statusOne.legs = 0;
        statusTwo.legs = 0;
        this.setState({ player1Status: statusOne, playerTwoStatus: statusTwo });
      } else {
        // Increase player's leg count
        statusOne.legs += 1;
        console.log("setting state to:", statusOne);
        this.setState({ player1Status: statusOne }, () => console.log("11111", this.state));
      }
    } else {
      if (statusTwo.legs === 2) {
        // If player gets to 3 legs won, increase their sets, reset all legs.
        statusOne.legs = 0;
        statusTwo.legs = 0;
        statusTwo.sets += 1;
        this.setState({ player1Status: statusOne, player2Status: statusTwo });
      } else {
        // Increase player's leg count
        statusTwo.legs += 1;
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