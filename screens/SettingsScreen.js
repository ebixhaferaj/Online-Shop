import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  SafeAreaView,
  Button,
  Anchor,
  DefaultTheme,
  DarkTheme,
  TextInput,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import * as firebase from 'firebase';
import { Card } from 'react-native-paper';


export default class Settings extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    displayName: '',
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }
  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    LayoutAnimation.easeInEaseOut();

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="ios-settings-outline" size={25}></Ionicons>
          <Text style={{ fontSize: 20 }}> Settings </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.button2}>
           PROFILE : {this.state.email}
          </Text>
          <Text style={{ color: 'white', alignItems: 'center', fontSize: 18, marginTop: 100  }}>
            <AntDesign name="instagram" size={24} color="black" />{' '}
            closetcapsule.e
          </Text>
          <Text style={{ color: 'white', alignItems: 'center', fontSize: 18 }}>
            {' '}
            <Entypo name="facebook" size={24} color="black" /> Closet Capsule
            Shop
          </Text>
          <TableView>
            <Section> 
              <Cell
                title="Help / FAQ"
                titleTextColor="grey"
                onPress={() => alert('Our Staff will contact you soon!')}
              />
              <Cell
                title="Contact Us"
                titleTextColor="grey"
                onPress={() => alert('Send a message on our Instagram Page')}
              />
            </Section>
          </TableView>
          <TouchableOpacity
            style={{ marginTop: 32 }}
            onPress={this.signOutUser}>
            <Text style={styles.button}>Logout</Text>
          </TouchableOpacity>
           <TableView>
            <Section footer="All rights reserved.">
            </Section>
          </TableView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'peachpuff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 130,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D9DB',
  },
  button: {
    paddingTop: 10,
    borderRadius: 15,
    marginLeft: 20,
    height: 40,
    width: 150,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
  },
    button2: {
    paddingTop: 10,
    borderRadius: 15,
    marginLeft: 20,
    height: 50,
    width: 300,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
