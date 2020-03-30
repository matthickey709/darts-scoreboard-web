import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-dom';

const Header = ({ onBack, title }) => (
  <SafeAreaView style={styles.headerContainer}>
    <View style={styles.header}>
      <TouchableHighlight>
        <Link to={"/"}>
          <View style={styles.headerLeft}>
            <Image style={styles.headerIcon} source={require("./data/icons8-home-48.png")} />
          </View>
        </Link>
      </TouchableHighlight>
      <View style={styles.headerCenter}>
        <Text accessibilityRole="heading" aria-level="3" style={styles.title}>{title}</Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E3292E',
    backgroundColor: '#E3292E',
  },
  header: {
    padding: 10,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerCenter: {
    flex: 1,
    order: 2
  },
  headerLeft: {
    order: 1,
  },
  headerRight: {
    order: 3,
    width: 80
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white'
  },
});

export default Header;