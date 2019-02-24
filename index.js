//import a lbrary to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList.js'


// Create a Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList/>
    </View>
  );
// rendering it to a device
AppRegistry.registerComponent('AwesomeProject', () => App);
