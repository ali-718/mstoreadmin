import React, { Component } from 'react';
import {Platform,TextInput, StyleSheet,Text, View,Image,TouchableOpacity,SafeAreaView,BackHandler,Dimensions,ScrollView,ImageBackground} from 'react-native';
import {Icon} from 'native-base'
import Modal from "react-native-modal";
import AutoHeightImage from 'react-native-auto-height-image';
import Logo from '../Assets/Images/logo.png';

export default class OrderDetail extends Component {

    state = {
        isModalVisible:false,
        ImageHeight:"100%",
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

    const  Picture = this.props.navigation.getParam('Picture')

    return (
      <View style={{flex:1,backgroundColor: "white",}}>
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

           {/* Modal starts */} 
        <Modal style={{width:"100%",height:"100%"}} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:-20,marginBottom:10,borderRadius:10,width:"100%"}}>
              <View style={{width:"100%",alignItems:"flex-end",marginTop:10}}>
                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                   <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                </TouchableOpacity>
              </View>
              <AutoHeightImage width={Dimensions.get('window').width} source={Picture} />
            </View>
        </Modal>
        {/* Modal ends */}

        {/* Body starts */}
        <ScrollView style={{flex:1,width:"100%",marginBottom:20}}>
            <View style={{width:'100%',alignItems:"center",flex:1}}>
                <View style={{width:"100%"}}>
                   <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}} style={{alignItems: 'center',}} activeOpacity={0.8}>
                    <ImageBackground  source={Picture} style={{width:"98%",height:250,alignItems:"flex-start"}}>
                    </ImageBackground>
                   </TouchableOpacity>  
                </View>
                <View style={{alignItems:"center",marginTop: 20,}}>
                    <Text style={{fontSize:20,color:"black"}}>
                    {this.props.navigation.getParam("Name")}
                    </Text>
                    <Text style={{fontSize:15,color:"black",marginTop:10}}>
                    ${this.props.navigation.getParam("Price")}
                    </Text>
                </View>
            </View>
            
            <View style={{width:"100%",alignItems:'center',marginTop:10,flexDirection:"row",alignItems: 'center',}}>
                <View style={{marginLeft:20}}>
                    <Text style={{color:"black",fontSize:15}}>Country :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold",marginLeft:10,fontSize:15}}>{this.props.navigation.getParam("Country")}</Text>
            </View>

            <View style={{width:"100%",alignItems:'center',marginTop:10,flexDirection:"row",alignItems: 'center',}}>
                <View style={{marginLeft:20}}>
                    <Text style={{color:"black",fontSize:15}}>City :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold",marginLeft:10,fontSize:15}}>{this.props.navigation.getParam("City")}</Text>
            </View>

            <View style={{width:"100%",alignItems:'center',marginTop:10,flexDirection:"row",alignItems: 'center',}}>
                <View style={{marginLeft:20}}>
                    <Text style={{color:"black",fontSize:15}}>Buyer name :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold",marginLeft:10,fontSize:15}}>{this.props.navigation.getParam("Buyer_Name")}</Text>
            </View>

            <View style={{width:"100%",alignItems:'center',marginTop:10,flexDirection:"row",alignItems: 'center',}}>
                <View style={{marginLeft:20}}>
                    <Text style={{color:"black",fontSize:15}}>Payment method :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold",marginLeft:10,fontSize:15}}>{this.props.navigation.getParam("Payment_Method")}</Text>
            </View>

            <View style={{width:"100%",alignItems:'center',marginTop:10,flexDirection:"row",alignItems: 'center',}}>
                <View style={{marginLeft:20}}>
                    <Text style={{color:"black",fontSize:15}}>Quantity :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold",marginLeft:10,fontSize:15}}>{this.props.navigation.getParam("Quantity")}</Text>
            </View>

            <View style={{width:"100%",alignItems:'center',marginTop:10,flexDirection:"row",alignItems: 'center',}}>
                <View style={{marginLeft:20}}>
                    <Text style={{color:"black",fontSize:15}}>Payment :-</Text>
                </View>
                <Text style={{color:this.props.navigation.getParam("Payment") == "Paid" ? "green" : "red",fontWeight:"bold",marginLeft:10,fontSize:15}}>{this.props.navigation.getParam("Payment")}</Text>
            </View>

            <View style={{width:"60%",alignItems:'center',marginTop:10,flexDirection:"row",alignItems: 'center',}}>
                <View style={{marginLeft:20}}>
                    <Text style={{color:"black",fontSize:15}}>Address :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold",marginLeft:10,fontSize:12}}>{this.props.navigation.getParam("Address")}</Text>
            </View>
               

            </ScrollView>
      </View>
    );
  }
}


const style = StyleSheet.create({
    Header:{
        width:"100%",
        height:50,
        backgroundColor: 'white',
        flexDirection: 'row',
      },
      TextStyle:{
        fontWeight:"bold",
        color:"black", 
        alignContent: 'flex-start',
        fontSize:11
      },
})

