import React from "react";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator } from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer,  DefaultTheme , DarkTheme} from '@react-navigation/native';
import {createDrawerNavigator,DrawerItem,DrawerItemList,DrawerContentScrollView,} from 'react-navigation-drawer';


import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Detailss from './screens/MyCart';
import PostScreen from "./screens/PostScreen";
import SettingsScreen from "./screens/SettingsScreen";

//import Dashboard from "./screens/Dashboard";
//import Favorites from './screens/Favorites'



import * as firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyCgrJTpaaPS_tU0WJrXepvWfb1rDNeIcq0",
    authDomain: "book-shop-f256a.firebaseapp.com",
    projectId: "book-shop-f256a",
    storageBucket: "book-shop-f256a.appspot.com",
    messagingSenderId: "786264854524",
    appId: "1:786264854524:web:2889ae4e5376ae9c22ec79",
  };
  
  // Initialize Firebase
  if(!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
  }

  
const AppTapNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => <AntDesign name="shoppingcart" size={24} color="black" />
      } 
    },
    Sell: {
      screen: PostScreen,
      navigationOptions: {
          tabBarIcon: () =>(
            <AntDesign name="skin" size={24} color="black" />
          )
      }
    },

     Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarIcon: () => <Ionicons name="ios-settings-outline" size={24} color="black" />
        } 
      }
    },
    {
      tabBarOptions: {
        activeTintColor: "#c71585",
        inactiveTintColor:"#B88C4",
        showLabel: true
       }
    }
);


 
 const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  MyCart: Detailss,
  HomeScreen: HomeScreen
});



  
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTapNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);