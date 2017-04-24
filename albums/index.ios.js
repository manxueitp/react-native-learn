//place code here for instructions

//Import library
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'

//Create Component
const App = () => (
   <View>
    <Header headerText = {'Awesome Album'}/>
    <AlbumList/>
  </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
