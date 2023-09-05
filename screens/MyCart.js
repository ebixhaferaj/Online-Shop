import React, { useState } from 'react';
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
  ScrollView,
} from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
//const Stack = createStackNavigator();

const items = [
  {
    source: require('../images/jeansdetail.png'),
    pp: require('../images/logo.png'),
    description: 'Vintage Diesel Jeans ',
  },
];
const CustomSectionHeader = () => (
  <View>
    <Text>Custom header!</Text>
  </View>
);
export default function Detailss({ props, navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Image style={styles.image2} source={item['source']} />
          <Text style={styles.description}>{item.description}</Text>
        </Card>
      </View>
    </View>
  );
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.name}>DESCRIPTION</Text>
           <TableView>
          <Section>
            <Cell cellStyle="Subtitle" title="Fabric Type:" detail='Denim' />
            <Cell cellStyle="Subtitle" title="Department:" detail="Men" />
            <Cell cellStyle="Subtitle" title="Size:" detail='34' />
            <Cell
              cellStyle="Subtitle"
              title="	Leg Style:"
              detail="	Straight"
            />
          </Section>
          </TableView>
          <Text>
            <AntDesign
              name="staro"
              size={30}
              color="black"
              style={{ marginRight: 40 }}
            />

            <AntDesign
              name="shoppingcart"
              size={30}
              style={{ marginRight: 40 }}
            />
            <AntDesign
              name="download"
              size={30}
              color="black"
              style={{ marginRight: 40 }}


            />
            <MaterialIcons
              name="feedback"
              size={30}
              color="black"
              style={{ marginRight: 20} , {marginBottom: 40}}
            />
          </Text>
        </SafeAreaView>
      </View>
    </ScrollView>
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
    container2: {
    alignItems: 'left',
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

  card: {
    marginTop: 40,
    marginBottom: 10,
  },
  marginn: {
    marginRight: 10,
  },
});
