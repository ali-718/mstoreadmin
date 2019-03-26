import React, { Component } from 'react';
import { View, Text,Dimensions,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Separator, Right } from 'native-base';
import { Icon } from 'native-base';
import Logo from '../Assets/Images/logo.png';
import Girl4 from '../Assets/Images/girl4.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import Shirt from '../Assets/Images/shirt.jpg';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'

  
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={{flex:1}}>
        {/* Header */}
        <View style={style.Header}>
          <View style={{
            alignItems:"center",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
              <Image source={Logo} style={{height:30,width:80}} />
          </View>
        </View>
        {/* Header ends here */}

      <ScrollView style={{flex:1,width:"100%",backgroundColor:"white"}}>
        <View style={{width:"100%",alignItems:"center",marginTop: 20,}}>
            <View style={{width:"89%",flexDirection:"row"}}>
                <View style={{flexGrow:1,height:80,backgroundColor: "#00C689",borderRadius:15,justifyContent: 'center',alignItems: 'center',}}>
                    <Icon name="check-circle" type="FontAwesome" style={{fontSize:25,color:"white"}} />
                    <Text style={{color:"white",fontSize:12,marginTop:5}}>
                        Total Sales
                    </Text>
                    <Text style={{fontWeight:"bold",color:"white",fontSize:15}}>
                        508$ <Text style={{fontSize:10,color:"white",fontWeight:'normal'}}>This month</Text>
                    </Text>
                </View>
                <View style={{marginLeft:10,flexGrow:1,height:80,backgroundColor: "#3DA5F4",borderRadius:15,justifyContent: 'center',alignItems: 'center',}}>
                    <Icon name="shopping-basket" type="FontAwesome5" style={{fontSize:22,color:"white"}} />
                    <Text style={{color:"white",fontSize:12,marginTop:7}}>
                        Total Purchases
                    </Text>
                    <Text style={{fontWeight:"bold",color:"white",fontSize:15}}>
                        1409$ <Text style={{fontSize:10,color:"white",fontWeight:'normal'}}>This month</Text>
                    </Text>
                </View>
            </View>
            <View style={{width:"89%",flexDirection:"row",marginTop:20}}>
                <View style={{flexGrow:1,height:80,backgroundColor: "#F1536E",borderRadius:15,justifyContent: 'center',alignItems: 'center',}}>
                    <Icon name="cart-plus" type="FontAwesome5" style={{fontSize:20,color:"white"}} />
                    <Text style={{color:"white",fontSize:12,marginTop:7}}>
                        Total Orders
                    </Text>
                    <Text style={{fontWeight:"bold",color:"white",fontSize:15}}>
                        211$ <Text style={{fontSize:10,color:"white",fontWeight:'normal'}}>This month</Text>
                    </Text>
                </View>
                <View style={{marginLeft:10,flexGrow:1,height:80,backgroundColor: "#FDA006",borderRadius:15,justifyContent: 'center',alignItems: 'center',}}>
                    <Icon name="chart-line" type="FontAwesome5" style={{fontSize:22,color:"white"}} />
                    <Text style={{color:"white",fontSize:12,marginTop:7}}>
                        Total Growth
                    </Text>
                    <Text style={{fontWeight:"bold",color:"white",fontSize:15}}>
                        365$ <Text style={{fontSize:10,color:"white",fontWeight:'normal'}}>This month</Text>
                    </Text>
                </View>
            </View>
        </View>

        {/* Sales Chart */}
        <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Sales</Text>
            <LineChart
                data={{
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                datasets: [{
                    data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                    ]
                }]
                }}
                width={Dimensions.get('window').width - 45} // from react-native
                height={220}
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#00C689',
                backgroundGradientTo: '#00C689',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                color:"white"
                }}
            />
            </View>
            
            {/* Sales chart end */}
            
            {/* Purhase chart */}
            <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Purchases</Text>
            <LineChart
                data={{
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                datasets: [{
                    data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                    ]
                }]
                }}
                width={Dimensions.get('window').width - 45} // from react-native
                height={220}
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#3DA5F4',
                backgroundGradientTo: '#3DA5F4',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                color:"white"
                }}
            />
            </View>
            {/* Purhase chart end */}

             {/* Order chart */}
            <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Orders</Text>
            <LineChart
                data={{
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                datasets: [{
                    data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                    ]
                }]
                }}
                width={Dimensions.get('window').width - 45} // from react-native
                height={220}
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#F1536E',
                backgroundGradientTo: '#F1536E',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                color:"white"
                }}
            />
            </View>
            {/* Order chart end */}

            {/* Growth chart */}
            <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Growth</Text>
            <LineChart
                data={{
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                datasets: [{
                    data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                    ]
                }]
                }}
                width={Dimensions.get('window').width - 45} // from react-native
                height={220}
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#FDA006',
                backgroundGradientTo: '#FDA006',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                color:"white"
                }}
            />
            </View>
            {/* Growth chart end */}

        {/*Orders */}
        <View style={{width:"100%",alignItems: 'center',marginTop:30,marginBottom:30,flex:1}}>
        <View style={{width:"90%"}}>
        <View style={{flexDirection:"row",width:"100%",marginBottom:10}}>
            <View style={{width:"50%",alignItems:"flex-start"}}>
            <Text style={{color:"black",fontSize:20,marginBottom:5}}>Orders</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')} style={{width:"50%",alignItems:"flex-end",justifyContent: 'center',}}>
            <Text style={{color:"black",fontSize:10,marginBottom:5}}>Show all ></Text>
            </TouchableOpacity>
        </View>
          <ScrollView nestedScrollEnabled={true} style={{height:300}}>
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
          </ScrollView>  
        </View>
        {/*Orders ends */}
     </View>

     {/* Top trending items */}
     <View style={{width:"100%",alignItems:"center",marginBottom:20}}>
       <View style={{width:"90%"}}>
       <View style={{flexDirection:"row",width:"100%"}}>
            <View style={{width:"50%",alignItems:"flex-start"}}>
            <Text style={{color:"black",fontSize:20,marginBottom:5}}>Top Products</Text>
            </View>
            <View style={{width:"50%",alignItems:"flex-end",justifyContent: 'center',}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemDetail')}>
                    <Text style={{color:"black",fontSize:10,marginBottom:5}}>Show all ></Text>
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Shirt,Name:"Armani Shirt made by Armani",Popularity:0.78})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Shirt} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Armani Shirt Made by Armani</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 78%</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Green,Name:"Green shirt of Levis",Popularity:0.62})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Green} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Green shirt of Levis</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 62%</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Ladies,Name:"Long Ladies shirt",Popularity:0.59})} style={{alignItems: 'center',marginLeft:10,marginTop:10}}>
                    <Image source={Ladies} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Long Ladies shirt</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 59%</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Girl4,Name:"Girls Nighty by Gucci",Popularity:0.41})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Girl4} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>Girls Nighty by Gucci</Text>
                      <Text style={{color:"black",fontSize:10}}>Popularity : 41%</Text>
                    </View>
                </TouchableOpacity>
        </ScrollView>
       </View>
     </View>
     {/* Top trending items ends */}
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
})