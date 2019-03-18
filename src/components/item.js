import React, { Component } from 'react';
import {Platform,TextInput, StyleSheet,Text, View,Image,TouchableOpacity,SafeAreaView,BackHandler,Dimensions,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab,Container,Tabs,TabHeading,Tab} from 'native-base'
import Modal from "react-native-modal";
import AutoHeightImage from 'react-native-auto-height-image';
import AnimatedBar from "react-native-animated-bar";
import Logo from '../Assets/Images/logo.png';

export default class Item extends Component {

    state = {
        HeartColor:"grey",
        isModalVisible:false,
        ImageHeight:"100%",
        progress:0
    }
    static navigationOptions = {
        drawerLabel:() => null
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

      const interval = setInterval(() => {
        if (this.state.progress >= this.props.navigation.getParam("Popularity")) return clearInterval(interval);
   
        this.setState(state => {
          return {
            progress: state.progress + 0.02,
          };
        });
      }, 5);
    }

    onBackButtonPressAndroid = () => {
      this.props.navigation.navigate('Home')
      return true
      }
  
    componentWillUnmount() {
      this._didFocusSubscription && this._didFocusSubscription.remove();
      this._willBlurSubscription && this._willBlurSubscription.remove();
    }
  
    HeartColor = () =>{
        if(this.state.HeartColor == "grey")
        {
          this.setState({
            HeartColor:"red"
          })
        }
        else{
          this.setState({
            HeartColor:"grey"
          })
        }
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" style={{fontSize:20}} />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
              <Image source={Logo} style={{height:40,width:110}} />
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
        <ScrollView style={{flex:1,width:"100%"}}>
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
                        $38.00
                    </Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10,justifyContent: 'center',}}>
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Text style={{color:"black"}}> (1) Rviews</Text>
                </View>
            </View>
            
            <View style={{width:"100%",alignItems:'center',marginTop:30}}>
                <View style={{width:"80%"}}>
                    <Text style={{color:"black",fontSize:20,marginBottom:5}}>Popularity :-</Text>
                </View>
                    <View style={{width:"80%", flexDirection:"row"}}>
                        <AnimatedBar
                            progress={this.state.progress}
                            height={20}
                            barColor="#42C2BF"
                            style={{flexGrow:2}}
                            duration={300}
                            />
                        <View style={{flexGrow:1,alignItems:"center"}}>
                            <Text style={{color:"black"}}>{Math.round(this.state.progress.toFixed(2) * 100)}%</Text>
                        </View>
                </View>
            </View>

            <View style={{width:"100%",alignItems:'center',marginTop:30}}>
                <View style={{width:"80%"}}>
                    <Text style={{color:"black",fontSize:20,marginBottom:5}}>Total Sold :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold"}}>48 Items</Text>
            </View>

            <View style={{width:"100%",alignItems:'center',marginTop:30,marginBottom:20}}>
                <View style={{width:"80%"}}>
                    <Text style={{color:"black",fontSize:20,marginBottom:5}}>Money Earned :-</Text>
                </View>
                <Text style={{color:"black",fontWeight:"bold"}}>$1634</Text>
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

