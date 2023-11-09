import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React,{useEffect, useState} from 'react'
import {Button, Input, Image} from "react-native-elements"
import { StatusBar } from "expo-status-bar";
import { firebase } from '../firebase';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unSubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            console.log(authUser)
          if(authUser)  {
            navigation.replace("Home")
          }
        })
        return unSubscribe;
        }, [])

    const signIn = () => {
        if (email !== '' && password !== '') {
            try {
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        var user = userCredential.user.uid;
                        console.log('From LoginScreen (UID)', user)
                    })
            } catch (error) {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  } else {
                    console.error(error);
                  }
            }
        }
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="light"/>
        <Image source={require('../assets/images/signal.png')}
        style={{width: 200, height: 200}}/>
        <View style={styles.inputContainer}>
            <Input placeholder='Email' autoFocus type="email" value={email} onChangeText={text => setEmail(text)}/>
            <Input placeholder='Password' secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)} onSubmitEditing={signIn}/>
        </View>
        <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
        <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register"/>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    inputContainer: {
        width: 300
    },
    button : {
        width: 200,
        marginTop: 10
    },
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    }
})