/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './src/components/Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Item from './src/components/item';
import ItemDetail from './src/components/ItemDetail';
import Order from './src/components/Orders';
import OrderDetail from './src/components/OrderDetail';
import Login from './src/components/Login';
import Splash from './src/components/splashscreen';
import Signup from './src/components/Signup';
import Forgot from './src/components/Forgot';

const Stacker = createStackNavigator({
  Login:{
    screen:Login
  },
  Forgot:{
    screen:Forgot
  },
  Signup:{
    screen:Signup
  },
  Splash:{
    screen:Splash
  },
  Home:{
    screen:Home
  },
  Order:{
    screen:Order
  },
  ItemDetail:{
    screen:ItemDetail
  },
  Item:{
    screen:Item
  },
  OrderDetail:{
    screen:OrderDetail
  }
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
