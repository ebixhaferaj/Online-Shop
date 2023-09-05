import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,ImageBackground,Image,StatusBar,KeyboardAvoidingView} from 'react-native';
//import Constants from 'expo-constants';
import * as firebase from 'firebase'
import {Ionicons} from "@expo/vector-icons";

import *  as Premissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";


export default class RegisterScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  state = {
    name:"",
    surname:"",
    email:"",
    password:"",
    errorMessage: null
  };


  handleSignUp = () => {
    firebase
     .auth()
     .createUserWithEmailAndPassword(this.state.email, this.state.password)
     .then(userCredentials => {
       return userCredentials.user.updateProfile({
         displayName: this.state.name
       });
     })
     .catch(error => this.setState({errorMessage: error.message}))
  };

  

  render() {
    return (
      <KeyboardAvoidingView style = {styles.conatiner}>
       


       <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
         <Ionicons name="md-arrow-back" size={30} color="#FFF"></Ionicons>
       </TouchableOpacity> 

        
      
        <View style = {styles.errorMessage}>
           {this.state.errorMessage && <Text syle={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style = {styles.form}>
          <View>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput 
              style={styles.input} 
              autoCapitalize="none" 
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            ></TextInput>
          </View>

          <View style={{marginTop:32}}>
            <Text style={styles.inputTitle}>Surname</Text>
            <TextInput 
              style={styles.input} 
              autoCapitalize="none" 
              onChangeText={surname => this.setState({ surname })}
              value={this.state.surname}
            ></TextInput>
          </View>

          <View style={{marginTop:32}}>
            <Text style={styles.inputTitle}>Email Adress</Text>
            <TextInput 
              style={styles.input} 
              autoCapitalize="none" 
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{marginTop:32}}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput 
              style={styles.input}
              secureTextEntry 
              autoCapitalize="none" 
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style = {styles.button} onPress={this.handleSignUp}>
          <Text style = {{color: "#FFF", fontWeight: "500"}}>Sign up</Text>
        </TouchableOpacity>


      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  conatiner: {
    flex:1,

  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color:"#db7093"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent:"center",
    marginHorizontal: 36,
    marginTop:130,
  },
  error: {
    color: "#E9446A",
    fontSize:13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
    marginTop:30,

  },
  inputTitle: {
    color: "#BA8F9E",
    fontSize: 11,
    textTransform: "uppercase",
    marginTop:-90
  },
  input: {
    borderBottomColor: "#BA8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
    marginBottom:89
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginTop:-91,
    shadowColor: '#FFA07A',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  back:{
    position:"absolute",
    top:48,
    left:22,
    width:32,
    height:32,
    borderRadius:16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: "center",
    justifyContent:"center",
    marginTop:-31,
  },
   avatar:{
    width:90,
    height:90,
    borderRadius: 50,
    backgroundColor:"#E1E2E6",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    marginLeft:40,
    marginTop:10,
    marginBottom:30,
  },
});