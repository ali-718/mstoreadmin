import React, { Component } from 'react';
import {Platform,TextInput, StyleSheet, Text, View,Image, TouchableOpacity,BackHandler,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab} from 'native-base'
import Shirt from '../Assets/Images/shirt.jpg';
import Tshirt from '../Assets/Images/black_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import WhiteSecond from '../Assets/Images/white_shirt_second.jpg';
import Shoes from '../Assets/Images/shoes_second.jpg';
import Bag1 from '../Assets/Images/bag1.jpg';
import Bag2 from '../Assets/Images/bag2.jpg';
import Logo from '../Assets/Images/logo.png';


export default class Orders extends Component {

    state = {
        isModalVisible:false,
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
        this.props.navigation.navigate('Home',{Lang:this.state.Lang})
        return true
      }
  
    componentWillUnmount() {
      this._didFocusSubscription && this._didFocusSubscription.remove();
      this._willBlurSubscription && this._willBlurSubscription.remove();
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }


    static navigationOptions = {
        drawerLabel:() => null
      }

  render() {

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

        {/* Body starts */}
        <ScrollView style={{flex:1,width:"100%",marginBottom:20}}>
            <View style={{width:'100%',alignItems:"center",flex:1}}>
                   <View style={{width:"90%"}}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Shirt,Country:"USA",City:"Chicago",Name:"Armani Shirt Made by Armani",Buyer_Name:"Jake Borne",Payment_Method:"Master Card",Payment:"Paid",Quantity:1,Address:"5400 N. Lakewood Avenue, Chicago, IL 60640",Price:88})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Shirt} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Armani Shirt Made by Armani
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $88.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>USA</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Master Card</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"green"}}>Paid</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>1</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Green,Country:"UAE",City:"Sharjah",Name:"Green Shirt by Levis",Buyer_Name:"Muhammad Ali Bin Waleed",Payment_Method:"Cash on Delivery",Payment:"Due",Quantity:2,Address:"Villa 12, Street 38, Sharqan, Sharjah 43/70 Sharjah United Arab Emirates",Price:38})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Green} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Green Shirt by Levis
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $38.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>UAE</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Cash on Delivery</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"red"}}>Due</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>2</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:White,Country:"UAE",City:"Dubai",Name:"Simple White Shirt By Levis",Buyer_Name:"Abdullah Kazi bin Ali",Payment_Method:"Bank",Payment:"Paid",Quantity:1,Address:"Sheikh Mohammed Bin Rashed Boulevard, Downtown Dubai, 21447 - Dubai - United Arab Emirates",Price:68})} style={{flexDirection:"row",width:"90%"}} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={White} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Simple White Shirt by Levis
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $68.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>UAE</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Bank</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"green"}}>Paid</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>1</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Shirt,Country:"Pakistan",City:"Karachi",Name:"Armani Shirt by Armani",Buyer_Name:"Ali Haider",Payment_Method:"Cash on Delivery",Payment:"Due",Quantity:3,Address:"Street no. 10 flat no.7 prem bhawan building burnes road karachi",Price:88})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Shirt} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Armani Shirt Made by Armani
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $88.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>Pakistan</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Cash on Dilevery</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"red"}}>Due</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>3</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:WhiteSecond,Country:"Canada",City:"Montreal",Name:"Simple White Shirt by Armani",Buyer_Name:"Syed Zubair Shah",Payment_Method:"Paypal",Payment:"Paid",Quantity:1,Address:"275 Notre-Dame St. E. | (At Gosford), Montreal, Quebec H2Y 1C6, Canada",Price:28})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={WhiteSecond} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Simple White Shrit by Armani
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $28.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>Canada</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Paypal</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"green"}}>Paid</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>1</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Tshirt,Country:"India",City:"Mumbai",Name:"Plain Balck Shirt by Charcoal",Buyer_Name:"Hatesh Kumar",Payment_Method:"Cash on Delivery",Payment:"Due",Quantity:2,Address:"New T2 Airport Road Andheri East, Mumbai, Maharashtra, Mumbai 400072 India",Price:38})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Tshirt} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Plain Balck Shirt by Charcoal
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $38.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>India</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Cash on Delivery</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"red"}}>Due</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>2</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Ladies,Country:"Canada",City:"Torronto",Name:"Long Ladeis Shirt",Buyer_Name:"Sarah Connor",Payment_Method:"Paypal",Payment:"Paid",Quantity:3,Address:"318 Wellington Street West Toronto, Ontario CANADA M5V 3T4",Price:23})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Ladies} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Long Ladies Shirt
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $23.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>Canada</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Paypal</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"green"}}>Paid</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>3</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Shoes,Country:"UAE",City:"Qatar",Name:"Crocodile Leather Shoes",Buyer_Name:"Manzoor Ahmed",Payment_Method:"Bank",Payment:"Paid",Quantity:2,Address:"Ahmed Bin Ali Street , Wadi Al Sail , P.O. Box 6401 , Doha 6401	, Qatar.",Price:99.99})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Shoes} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Crocodile Leather Shoes
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $99.99
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>UAE</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Bank</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"green"}}>Paid</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>2</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Bag1,Country:"Canada",City:"Montreal",Name:"Orange Ladies Bag",Buyer_Name:"Syed Hina Shah",Payment_Method:"Paypal",Payment:"Paid",Quantity:1,Address:"275 Notre-Dame St. E. | (At Gosford), Montreal, Quebec H2Y 1C6, Canada",Price:130.00})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Bag1} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Orange Ladies bag
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $130.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>Canada</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Paypal</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"green"}}>Paid</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>1</Text>
                        </Text>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:Bag2,Country:"England",City:"Manchester",Name:"Subway Ladies Bag",Buyer_Name:"Katty Wilson",Payment_Method:"Cash on Dilevery",Payment:"Due",Quantity:1,Address:"Bridgewater House, 60, Whitworth St, Manchester, M1 6LT",Price:127.00})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={Bag2} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Subway Ladies Bag
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $127.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>England</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Cash on Delivery</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"red"}}>Due</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>1</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail',{Picture:WhiteSecond,Country:"Saudi Arabia",City:"Jeddah",Name:"Simple White Shirt by Armani",Buyer_Name:"Syed Murtuza Ali Shah",Payment_Method:"Bank",Payment:"Paid",Quantity:1,Address:"Muhyi Ad Din An Nadhir, Al Hamra, Jeddah, 23212, Saudi Arabia",Price:28})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:30,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={WhiteSecond} />
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:"90%",height:130,}}>
                        <Text style={{color:"black",fontSize:15}}>
                        Simple White Shrit by Armani
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            $28.00
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Deliver to: <Text style={{fontWeight:"bold"}}>Saudi Arabia</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment Method: <Text style={{fontWeight:"bold"}}>Bank</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Payment: <Text style={{fontWeight:"bold",color:"green"}}>Paid</Text>
                        </Text>
                        <Text style={{color:"black",fontSize:12,marginTop:4}}>
                            Quantity: <Text style={{fontWeight:"bold"}}>1</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>    
        </ScrollView>
        {/* Body ends */}
      </View>
    );
  }
}
const style = StyleSheet.create({
    ViewDisplay:{
      backgroundColor: "white",
       width:150,
       alignItems:"center"
      },
      ColumnStyle:{
        height: 250,
        alignItems:"center",
        justifyContent: 'center',
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
          alignItems:"center"
        },
        BottomModal: {
          justifyContent: "flex-end",
          height:"50%",
          margin: 0,
        },
  })
  
