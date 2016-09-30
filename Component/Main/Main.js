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
    View,
    Image,
    Navigator,
    Platform
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
var BackgroundStyle = require('../CommonStyle/BackgroundStyle');
var SelectedColor = require('../CommonStyle/CommonTextStyle');
var Home = require('../Home/Home');
var Dictionary = require('../Dictionary/Dictionary');
var Setting = require('../Setting/Setting');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = { selectedTab: 'home' };
    }

    render() {


        return (
            <TabNavigator style={styles.tabWidth}>
                {/*首页*/}
                {this.creatTabbarItem('字典','dictionary','select_dictionary','home','字典',Home)}
                {/*商家*/}
                {this.creatTabbarItem('单词本','notebook','select_notebook','Dictionary','单词本',Dictionary)}
                {/*我的*/}
                {this.creatTabbarItem('设置','setting','select_setting','setting','设置',Setting)}
            </TabNavigator>
        );
    }

    //创建tabbarItem
    creatTabbarItem(title,iconName,selectedIconName,selectedTab,componentName,component){

        return(

            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.tabbarIconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.tabbarIconStyle}/>}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selectedTitleStyle = {SelectedColor.selectedColor}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={ ()=>{

                        return Navigator.SceneConfigs.PushFromRight
                    }}

                    renderScene={(route,navigator) => {

                        let Component = route.component;
                        return <Component {...route.passProps} navigator = {navigator}/>
                    }}

                    sceneStyle={

                        <View><Text>heheh</Text></View>
                    }

                />

            </TabNavigator.Item>
        )
    }

}

const styles = StyleSheet.create({
    tabbarIconStyle:{

        width: Platform.os === 'ios' ? 30 : 25,
        height:Platform.os === 'ios' ? 30 : 25
    },

    tabbarItemSelectedWordStyle:{

        color:'orange',
    },

    tabWidth:{
        width:width,
    }
});

module.exports = Main;
