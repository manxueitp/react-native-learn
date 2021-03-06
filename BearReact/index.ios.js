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
  View,
  Image,
  LayoutAnimation,
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(()=>{
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <View>
        <Text>{display}</Text>
      </View>
    );
  }
}
class BearReact extends Component {
  render() {
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.bluetext}>
          Bear Pocket 
        </Text>
        <Text style={styles.instructions}>
          React-native app for bear-pocket
        </Text>
        <Text style={styles.instructions}>
          A project to learn react-native{'\n'} 
        </Text>
        <Blink text='I love to blink'/>
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
  bluetext: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

AppRegistry.registerComponent('BearReact', () => BearReact);
//AppRegistry.registerComponent('BearPic', () => BearPic);
