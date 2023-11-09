import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput,Button, Keyboard, ScrollView,FlatList,TouchableOpacit, ImageBackground,Image } from 'react-native';

export default function QwesTab({navigation}) {
    const [questaion,setQuestaion] = useState('')
    const [answar,setAnswar] = useState({answar1: '', answar2: '', answar3: '', answar4: ''})
    const pressHandler = () => {
        navigation.goBack()
        }

  return (
<ImageBackground source={require('../assets/images/backGroundImage.jpg')}>
    <Text style={styles.Name}> Enter a questaion: </Text>
    <TextInput  
    style={styles.input} 
    onChangeText={(value) => {setQuestaion(value)}}/>
    <View style={styles.blueAndredAnswars}>
     <TextInput 
     style={styles.redPress}
     placeholder='Add answar'
     placeholderTextColor="white"
     onChangeText= {(value) => {setAnswar({answar1: value})}}/>
      <TextInput 
     style={styles.bluePress}
     placeholder='Add answar'
     placeholderTextColor="white"/>
     </View> 
     <View style={styles.yellowAndgreenAnswars}>
     <TextInput 
     style={styles.yellowPress}
     placeholder='Add answar'
     placeholderTextColor="white"/>
      <TextInput 
     style={styles.greenPress}
     placeholder='Add answar'
     placeholderTextColor="white"/>
     </View> 
     <View style={styles.button} >
        <Button  style={styles.button} title='Add' onPress={() => navigation.navigate('SecondTab',{answar},{questaion})}/>
        <Image source={require('../assets/images/kahoot.jpg')}/>
      </View>
</ImageBackground> 
);}

const styles = StyleSheet.create({
  backGroundImage : {
    width: 26,
    height: 26

  },
  background: {
    backgroundColor: 'purple'
  },
  Name: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 4,
    width: 390,
    fontSize: 25,
    fontWeight: 'bold',
  },
  redPress: {
    marginLeft: 10,
    marginTop: 60,
    width: 180,
    height: 120,
    backgroundColor: 'red',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  bluePress: {
    marginTop: 60,
    marginLeft: 10,
    width: 180,
    height: 120,
    backgroundColor: 'blue',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  yellowPress: {
    marginLeft: 10,
    marginTop: 10,
    width: 180,
    height: 120,
    backgroundColor: '#f5a30c',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  greenPress: {
    marginLeft: 10,
    marginTop: 10,
    width: 180,
    height: 120,
    backgroundColor: 'green',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  blueAndredAnswars:{
    flexDirection: 'row',
  },yellowAndgreenAnswars: {
    flexDirection: 'row',
  },
  button : {
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 355,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
  },
  icon : {
    flexDirection: 'row',
  },
});