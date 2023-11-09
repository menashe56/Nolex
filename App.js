import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
//import Navigator from './navigate/HomeStack'
import * as font from 'expo-font';
import {AppLOading} from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './screen/Login';
import Register from './screen/Register';
import HomeScreen from './screen/HomeScreen';
import AddChatScreen from "./screen/AddChatScreen"
import ChatScreen from "./screen/ChatScreen"
import Home from './Tabs/Home';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED"},
  headerTitleStyle: { color: "white"},
  headerTintColor: "white",
}

export default function App() {
 
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={Home}/>
          {/*
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="AddChat" component={AddChatScreen}/>
          <Stack.Screen name="Chat" component={ChatScreen}/>
         */}
        </Stack.Navigator>
      </NavigationContainer>
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});