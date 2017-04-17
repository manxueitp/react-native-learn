/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BearReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bear Pocket 
        </Text>
        <Text style={styles.instructions}>
          React-native app for bear-pocket
        </Text>
        <Text style={styles.instructions}>
          A project to learn react-native{'\n'}
          
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BearReact', () => BearReact);
