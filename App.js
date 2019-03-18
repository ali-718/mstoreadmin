/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Item from './src/components/item';

const Stacker = createStackNavigator({
  Home:{
    screen:Home
  },
  Item:{
    screen:Item
  },
},
{
  headerMode:"none"
}
);

const AppNav = createAppContainer(Stacker)

export default class App extends Component {
  render() {
    return (
     <AppNav />
    );
  }
}
