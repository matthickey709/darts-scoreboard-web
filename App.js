import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Routes from './src/Routes';

class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "rgba(249, 223, 188, 0.4)"
  },
});

AppRegistry.registerComponent('App', () => App);

export default App;