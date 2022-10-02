import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Root from "./src/main";
export default class Uber extends Component {
  render() {
    console.log("Testing Render in App.js");
    return (
      <View style={styles.container}>
        <Root {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 30,
    textAlign: 'Justify',
    margin: 12,
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 2,
  },
});

AppRegistry.registerComponent('Uber', () => Uber);
