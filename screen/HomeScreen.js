import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useState, useEffect, } from 'react'
import CustomListItem from "../components/CustomListItem"
import { Avatar } from 'react-native-elements'
import { firebase } from '../firebase'
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"

const HomeScreen = ({navigation}) => {
  const [chats, setChats] = useState([])

  useEffect(() => {
    const unSubscribe = firebase.firestore().collection('chats').onSnapshot(snapshot => {
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    return unSubscribe;
  },[])

  const signOutUser = () => {
    firebase.auth().signOut().then(() => {
      navigation.replace("Login")
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
       headerTitleAlign: 'center',
      headerStyle: { backgroundColor: "#fff" }, // Fixed typo: 'headrStyle' should be 'headerStyle'
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
        <Avatar rounded source={{ uri: firebase.auth()?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 80,
          marginRight: 20,
        }}>
          <TouchableOpacity activeOpacity={0.5} >
            <AntDesign name='camerao' size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AddChat")}>
            <SimpleLineIcons name="pencil" size={24} color="black"/>
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);
  

  const entarChat = (id, chatName) => {
    navigation.navigate('Chat', {
      id,
      chatName,
    })
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({id,data: {chatName}}) => (
          <CustomListItem key={id} id={id} chatName={chatName} entarChat={entarChat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    height: "100%"
  },
})