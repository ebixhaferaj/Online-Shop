import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar, ImageBackground,LayoutAnimation,KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
import {Ionicons} from "@expo/vector-icons";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email:"",
    password:"",
    errorMessage: null
  };

  handleLogin = () => {
    const {email, password} = this.state

    firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <KeyboardAvoidingView style = {styles.conatiner}>
      


      
       <View>
         <Image style={styles.logo1} source={require('../images/logo.png')} />
         
       </View>


         
       
       

       <View style = {styles.errorMessage}>
           {this.state.errorMessage && <Text syle={styles.error}>{this.state.errorMessage}</Text>}
       </View>

        <View style = {styles.form}>
          <View>
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

        <TouchableOpacity style = {styles.button} onPress={this.handleLogin}>
          <Text style = {{color: "#FFF", fontWeight: "500"}}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style = {{alignSelf:"center", marginTop: 32}} 
         onPress={() => this.props.navigation.navigate("Register")}>

          <Text style={{color: "#414559", fontSize: 13}}>
            Don't have an account? <Text style={{fontWeight:"500", color:"#E9446A"}}>Sign up</Text>
          </Text>
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
    marginHorizontal: 36 
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

  },
  inputTitle: {
    color: "#BA8F9E",
    fontSize: 11,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#BA8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#FFA07A',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
    logo1: {
    height: 200,
    width: 200,
    marginLeft: 85,
    borderRadius: 100,
    marginTop: 45,
  },
 
});