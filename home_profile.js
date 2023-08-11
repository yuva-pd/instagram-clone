import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Topnav from './topnav';
import Status from './status';
import Svg, {Path} from 'react-native-svg';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Homescreen from './homescreen';
import {NavigationContainer} from '@react-navigation/native';
import messanger from './messanger';
import Search from './search';
import Profile from './profile';

export default function HomeProfile(){
    const Stack = createStackNavigator();
    
  
    return (
        <View>
            <Topnav/>
        <Scrolldata/> 
        {/* <Text>hii</Text> */}
        {/* <Text>cdwhb</Text> */}
        </View>
      );
}