import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import {Button, Input, Image} from "react-native-elements"
import { StatusBar } from "expo-status-bar";
import React, {useState, useLayoutEffect} from 'react'
import { firebase } from '../firebase';

const Register = ({ navigation }) => {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setimageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",
        });
    },[navigation]);

    const register = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log(imageUrl)
          authUser.user.updateProfile({
            displayName: name,
            photoURL:
            imageUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
          });
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
        });
    }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
     <StatusBar style="light"/>
      <Text style={{marginBottom: 50, fontSize: 28}}>Create a Signal account</Text>
      <View style={styles.inputContainer}>
      <Input placeholder='Full Name' autoFocus type="text" value={name} onChangeText={text => setName(text)}/>
      <Input placeholder='Email' autoFocus type="email" value={email} onChangeText={text => setEmail(text)}/>
      <Input placeholder='Password' secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)}/>
      <Input placeholder='Profile Picture URL (optional)' type="text" value={imageUrl} onChangeText={text => setimageUrl(text)} onSubmitEditing={register}/>
      </View>
      <Button containerStyle={styles.button} raised title='Register' onPress={register}/>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"        
    },
    button : {
        width: 200,
        marginTop: 10,

    },
    inputContainer : {
        width: 300,

    },
})