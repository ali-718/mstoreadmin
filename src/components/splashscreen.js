import React, { Component } from 'react';
import {Image,BackHandler} from 'react-native';
import SplashImage from '../Assets/Images/splash.jpeg';

export default class Splash extends Component {
 
    static navigationOptions = {
        drawerLabel:() => null
    }

    componentWillMount(){
        setTimeout(() => this.props.navigation.navigate('Home'),2000)
        BackHandler.addEventListener('hardwareBackPress',function () {return true})
    }

  render() {
    return (
          <Image source={SplashImage} style={{width:"100%",height:"100%"}} />
    );
  }
}
