import React, { useState, useContext, createContext } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Button,
  ImageBackground,
  Dimensions,
} from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

//const Stack = createStackNavigator();



class Anchor extends React.Component {
  
  _handlePress = () => {
    console.log("Link clicked for " + this.props.href);
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  

  render() {
    return (
      
      <Button  title={this.props.title} onPress={this._handlePress} />
    );
  }
}
const items = [
  {
    account: 'Closet Capsule',
    source: require('../images/jeans.png'),
    pp: require('../images/logo.png'),
    description: 'Vintage Diesel Jeans',
    detail: '',
  },
  {
    account: 'Closet Capsule',
    source: require('../images/greendress.png'),
    pp: require('../images/logo.png'),
    description: 'Vintage green mildi maxi velvet dress womens 36',
  },
  {
    account: 'Closet Capsule',
    source: require('../images/reddress.png'),
    pp: require('../images/logo.png'),
    description: 'Vintage Red Dress S/M',
  },
  {
    account: 'Closet Capsule',
    source: require('../images/shirt.png'),
    pp: require('../images/logo.png'),
    description: '90s Black Shirt XS',
  },
  {
    account: 'Closet Capsule',
    source: require('../images/red.png'),
    pp: require('../images/logo.png'),
    description: 'Red Shirt + Skirt ',
  },
];

export default function HomeScreen({ props, navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.feedItem}>
        <Image style={styles.image} source={item['pp']} />
        <Text style={styles.name}>{item.account}</Text>
      </View>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Image style={styles.image2} source={item['source']} />
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity
            style={styles.wishListButton}
            onPress={() => navigation.navigate('MyCart')}>
            <Text style={styles.wishListButtonText}>
              <Icon name="shopping-bag" size={12} /> Add to Cart
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Home</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const paddedWidth = Dimensions.get('window').width - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'peachpuff',
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
  },
  name: {
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
    marginLeft: 10,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginTop: 20,
  },
  image2: {
    alignItems: 'center',
    width: 300,
    height: 350,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  header: {
    paddingTop: 4,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    shadowColor: '#454D65',
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    fontSize: 18,
    marginTop: 10,
  },
  card: {
    marginBottom: 30,
  },
  wishListButton: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5f9f0d',
  },
  wishListButtonText: {
    color: '#fff',
    fontFamily: 'GothamBook',
    fontSize: 10,
  },
});
