import React, { Component } from 'react'
import {Platform,TextInput, StyleSheet, Text,BackHandler, View,Image, TouchableOpacity,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Logo from '../Assets/Images/logo.png';
import Girl4 from '../Assets/Images/girl4.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import Shirt from '../Assets/Images/shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import WhiteSecond from '../Assets/Images/white_shirt_second.jpg';


export default class ItemDetail extends Component {
  state={
    searchModal:false,
    Lang:this.props.navigation.getParam('Lang','en'),
  }

  _didFocusSubscription;
  _willBlurSubscription;
  
  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.goBack()
    return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  render() {


    return (
       <SafeAreaView style={{flex:1, backgroundColor: "white",}}>
          {/* Header */}
       <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{fontSize:20}} />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
              <Image source={Logo} style={{height:30,width:80}} />
          </View>
        </View>
        {/* Header ends here */}

       <ScrollView>
         <Grid style={{marginTop:20}}>
            <Col style={style.ColumnStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Shirt,Name:"Armani Shirt made by Armani",Popularity:0.78})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Shirt} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Armani Shirt Made by Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 78%</Text>
                    </View>
                </TouchableOpacity>
            </Col>
              <Col>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Ladies,Name:"Long Ladies shirt",Popularity:0.59})} style={{alignItems: 'center',marginLeft:10,marginTop:10}}>
                    <Image source={Ladies} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Long Ladies shirt</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 59%</Text>
                    </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Green,Name:"Green shirt of Levis",Popularity:0.62})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Green} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Green shirt of Levis</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 62%</Text>
                    </View>
            </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Girl4,Name:"Girls Nighty by Gucci",Popularity:0.41})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Girl4} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Girls Nighty by Gucci</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 41%</Text>
                    </View>
            </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:White,Name:"Simple White shirt by Levis",Popularity:0.37})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={White} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Simple White Shirt by Levis</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 37%</Text>
                    </View>
            </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:WhiteSecond,Name:"Simple white shirt by Armani",Popularity:0.35})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={WhiteSecond} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Simple white shirt by Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 35%</Text>
                    </View>
            </TouchableOpacity>
            </Col>
          </Grid>
        </ScrollView>

              </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  ViewDisplay:{
    backgroundColor: "white",
     width:140,
     alignItems:"center",
     alignItems:"flex-start"
    },
    ColumnStyle:{
      height: 250,
      alignItems:"center",
      justifyContent: 'center',
      marginBottom: 20,
    },
    TextStyle:{
      fontWeight:"bold",
      color:"black", 
      alignContent: 'center',
    },
    Header:{
        width:"100%",
        height:50,
        backgroundColor: 'white',
        flexDirection: 'row',
      },
      BottomModal: {
        justifyContent: "flex-end",
        height:"50%",
        margin: 0,
      },
})
