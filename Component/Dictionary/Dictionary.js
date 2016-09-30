/**
 * Created by ZCBL on 16/9/30.
 */
/**
 * Created by ZCBL on 16/9/30.
 */
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

var BackgroundStyle = require('.././CommonStyle/BackgroundStyle');

class Dictionary extends Component {
    render() {
        return (
            <View style={[styles.container,BackgroundStyle.commonBackgroundStyle]}>

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

});

module.exports = Dictionary;
