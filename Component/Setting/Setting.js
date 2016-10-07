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

var BackgroundStyle = require('../CommonStyle/BackgroundStyle');
var SettingCell = require('./SettingCell');

class Setting extends Component {
    render() {
        return (
            <View style={[styles.container,BackgroundStyle.commonBackgroundStyle]}>
               <View style={BackgroundStyle.commonBackgroundStyle}>

                   <SettingCell titleString="清除缓存"/>
                   <SettingCell titleString="意见反馈"/>
                   <SettingCell titleString="关于我们"/>
                   <SettingCell titleString="去评价"/>
               </View>
               <View>
                   <SettingCell titleString="当前版本" discribeTitle="v1.0.0"/>
               </View>
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

module.exports = Setting;
