import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { Input, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome"
import { firebase } from '../firebase';

const AddChatScreen = ({navigation}) => {

    const [input,setInput] = useState("")

    const createChat = async () => {
        await firebase.firestore().collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack()
        }).catch((error) => console.error(error));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Add a new Chat",
          headerBackTitle: "Chats",
        });
      }, [navigation]);
  return (
    <View style={styles.container}>
        <Input placeholder='Enter a chat name' value={input} onChangeText={(text) => setInput(text)} onSubmitEditing={createChat} leftIcon={<Icon name='wechat' type="antdesign" size={24} color="black" />} />
        <Button disabled={!input} title='Create new chat' onPress={createChat}/>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    },
})