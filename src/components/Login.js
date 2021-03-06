import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput,BackHandler, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
import Logo from '../Assets/Images/logo.png';
import Hr from "react-native-hr-component";
import facebook from '../Assets/Images/facebook.png';
import { Container, Header, Content, Button, Toast } from "native-base";

export default class Login extends Component {

  state={
    borderColor:"black",
    Email:"",
    Password:"",
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
    this.setState({
      borderColor:"black"
  })
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.goBack()
    return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  LoginPress = () => {
    if(this.state.Email == "" || this.state.Password == "")
    {
      this.setState({
        borderColor:"red"
      })
      alert("Please Enter all Fields")
    }
    else{
      this.setState({
          borderColor:"black"
      })
      this.props.navigation.navigate("Home")
      }
    }


  render() {

    const style = StyleSheet.create({
      container:{
        flex:1,
       alignItems:"center",
       backgroundColor:"white",
       width:"100%",
     },
      insta:{
        width:220, 
       height:82,
       marginTop:30
     },
     txtView:{marginTop:50, 
       width:"80%", 
       alignItems:"center"
     },
     txtInput:{
          borderColor:this.state.borderColor,
          borderWidth:1,
          width:"100%",
          borderRadius:5,
          backgroundColor:"rgba(220,220,220,0.3)",
          marginTop:10
      },
      loginBtnView:{
       width:"80%", 
       alignItems:"center",
       flex:0.8
      },
      loginBtn:{
        backgroundColor:'#42C2BF',
        width:"100%",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginTop:10
      },
      bottomView:{ 
        flex:0.2,  
        width:"100%", 
        justifyContent:"flex-start", 
        alignItems:"center" ,
        marginBottom: 20,
     },
     Header:{
       width:"100%",
       height:50,
       backgroundColor: 'white',
       flexDirection: 'row',
     }
   }
   )
   

    return (
      <ScrollView style={{flex:1,backgroundColor: "white",}}>
      <View style={style.container}>
      <View style={{alignItems:"center"}}>
      <Image source={Logo} style={style.insta}></Image>
      </View>
      <View style={style.txtView}>
          <TextInput onChangeText={(val) => {this.setState({Email:val})}} value={this.state.Email} style={style.txtInput} placeholder="Username or Email" placeholderTextColor="#A9A9A9"></TextInput>
          <TextInput secureTextEntry={true} onChangeText={(val) => {this.setState({Password:val})}} value={this.state.Password} style={style.txtInput} placeholder="Password" placeholderTextColor="#A9A9A9"></TextInput>
      </View>
      <View style={{width:"80%", alignItems:"flex-end"}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
        <Text style={{fontSize:13, marginLeft:30, fontWeight:"bold"}}>Forgot Password ?</Text>
      </TouchableOpacity>
      </View>
      <View style={style.loginBtnView}>
        <TouchableOpacity onPress={this.LoginPress} style={style.loginBtn}>
          <Text style={{color:"white", fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
        <Hr text='Or' lineColor="#C0C0C0" width={1}/>
        <TouchableOpacity style={style.loginBtn}>
          <Text style={{color:"white", fontWeight:"bold"}}><Image source={facebook} style={{borderRadius:5}}/> &nbsp; Login with Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={style.bottomView}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}><Text style={{paddingTop:"3%", fontSize:12,color:"black"}}>Dont have an account? <Text style={{fontWeight:"bold", color:"#42C2BF"}}>Signup</Text></Text></TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    )
  }
}

