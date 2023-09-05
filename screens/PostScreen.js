import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { Caption, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

export default function PostScreen({ route }) {
  const [imageUri, setImageUri] = React.useState({ imageUriDefault });
  const imageUriDefault =
    'https://www.htmlcsscolor.com/preview/gallery/FFDAB9.png';
    
  var pickImage = async () => {
    var permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    var result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view1}>
          <View style={styles.view1}>
              <Text style={styles.header}>Sell</Text>
          </View>
          <Text style={styles.caption}>ADD PICTURE</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button1} onPress={pickImage}>
             <Ionicons name="ios-camera-outline"  size={24}></Ionicons>
            </TouchableOpacity>
            <Image source={imageUriDefault} style={styles.itemImage} />
            <Image source={imageUri} style={styles.itemImage1} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peachpuff',
    
  },
  view1: {
    marginBottom: 5,
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: '500',
    padding: 7,
    color: 'black',
    marginTop: 40,
  },
  button1: {
    fontSize: 15,
    padding: 1,
    height: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    margin: 5,
    fontFamily: 'calibri',
    alignItems: 'center',
  },
  itemImage: {
    width: 140,
    height: 30,
  },
  itemImage1: {
    width: 200,
    height: 300,
    borderRadius: 40,
  },

  item: {
    flexDirection: 'column',
    padding: 1,
  },
    header: {
    paddingTop: 4,
    paddingBottom: 16,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth: 1,
    shadowColor:"#454D65",
    shadowOffset:{height:5},
    shadowRadius: 15,
    shadowOpacity:0.2,
    zIndex:10,
    fontSize: 18,
    marginTop: 10,
  },
});
