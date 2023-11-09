import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ListItem, Avatar} from "react-native-elements"
import {firebase} from "../firebase"

const CustomListItem = ({id, chatName, entarChat}) => {

    const [chatMessages,setChatMessages] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('chats').doc(id).collection('messages').
        orderBy('timestamp','desc').onSnapshot((snapshot) => setChatMessages(snapshot.docs.map(doc => doc.data())));
        return unsubscribe;
    })

  return (
    <ListItem onPress={() => entarChat(id, chatName)} key={id} bottomDivider>
        <Avatar rounded source={{
            uri: chatMessages?.[0]?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        }}/>
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "800"}}>
                {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})