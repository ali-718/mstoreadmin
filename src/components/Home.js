import React, { Component } from 'react';
import { View, Text,Dimensions,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Separator, Right } from 'native-base';
import { Icon } from 'native-base';
import Logo from '../Assets/Images/logo.png';
import Girl4 from '../Assets/Images/girl4.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
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

        {/* Pending Orders */}
        <View style={{width:"100%",alignItems: 'center',marginTop:30,marginBottom:30,flex:1}}>
        <View style={{width:"90%"}}>
        <View style={{flexDirection:"row",width:"100%",marginBottom:10}}>
            <View style={{width:"50%",alignItems:"flex-start"}}>
            <Text style={{color:"black",fontSize:20,marginBottom:5}}>Pending Orders</Text>
            </View>
            <View style={{width:"50%",alignItems:"flex-end",justifyContent: 'center',}}>
            <Text style={{color:"black",fontSize:10,marginBottom:5}}>Show all ></Text>
            </View>
        </View>
          <ScrollView nestedScrollEnabled={true} style={{height:300}}>
            <Separator bordered>
                <Text>USA</Text>
            </Separator>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem last>
                <Text>Lee Allen</Text>
            </ListItem>
            <Separator bordered>
                <Text>Singapore</Text>
            </Separator>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <Separator bordered>
                <Text>Qatar</Text>
            </Separator>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
                <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem last>
                <Text>Lee Allen</Text>
            </ListItem>
          </ScrollView>  
        </View>
        {/* Pending Orders ends */}
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