
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
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');


class SettingCell extends Component {



    render() {
        return (
            <View style={[styles.container,BackgroundStyle.commonBackgroundStyle]}>
                <Text>{this.props.titleString}</Text>
            </View>
        );
    }

    _renderRightView(){
            if(this.props.discribeTilte.length > 0){
                return(
                    <Text>{this.props.discribeTitle}</Text>
                )
            }else {
                return(
                    <Image source={{uri:'next'}} style={{width:12,height:12}}/>
                )
            }

    }
}

const styles = StyleSheet.create({
    container: {
        width:width,
        height:44
    },

});

module.exports = SettingCell;
