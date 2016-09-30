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

var Main = require('./Component/Main/Main');

class Dictionary_ReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Dictionary_ReactNative', () => Dictionary_ReactNative);
