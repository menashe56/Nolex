import React, { useState, useEffect } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Keyboard, ScrollView,FlatList,Alert,TouchableWithoutFeedback,Modal} from 'react-native';
import ReviewForm from './reviewForm';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from './CustomTextInput';
import { Directions } from 'react-native-gesture-handler';
import CustomButton from './CustomButton'

export default function Home({navigation}) {
    const [data, setData] = useState([]);
    const studentId=2;
    const handlePrintData = () => {
        // Fetch data from your server's API endpoint
        fetch('http://10.0.0.14:3000/api/fetch/'+studentId)
          .then((response) => response.json())
          .then((data) => {
            if (data.length === 0) {
              // Show an alert if no student is found
              Alert.alert('Student Not Found', 'No student with ID 2 was found.');
            } else {
              console.log('Data received:', data);
              setData(data); // Store the fetched data in the component's state
            }
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      };

      const handleSearchTopic = () => {
        // Fetch data from your server's API endpoint using the provided topic
        fetch(`http://10.0.0.14:3000/api/fetchTopic/${searchInput}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.length === 0) {
              // Show an alert if no topic is found
              Alert.alert('Topic Not Found', `No topic named ${searchInput} was found.`);
            } else {
              console.log('Data received:', data);
              setData(data);
            }
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      };
      
      


    const [searchInput,setSearchInput] = useState('')
    const [title,setTitle] = useState('')
    const [ModalOpen,setModalOpen] = useState(false);


  return (

    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
    <View >
    <Modal visible={ModalOpen}  animationType='slide'>
        <View style={styles.a}>
        <View style={styles.titleTopic}>
          <MaterialIcons name='close' size={45} onPress={() => setModalOpen(false)}/>
          <Text style={styles.topic}>Create Topic</Text>
          <MaterialIcons name='done' size={45} onPress={() => setModalOpen(false)}/>
        </View>
            <Text style={styles.image}>Tap to add image</Text>
            <View style={styles.titleTopic2}>
            <Text style={styles.titleText}>Title: </Text>
            <TextInput style={styles.input} placeholder='Enter title' onChangeText={(title) => setTitle(val)}
          />
        </View>
        </View>
    </Modal>
    <View style={styles.search}>
      <TouchableOpacity onPress={handleSearchTopic}>
        <MaterialIcons name='search' size={50} style={styles.icon} />
      </TouchableOpacity>
       <TextInput
        style={styles.input}
        placeholder='Enter a topic'
        onChangeText={(val) => setSearchInput(val)}
      />
    </View>
    <View style={styles.addbutton}>
     <CustomButton text='Add new topic' icon='add' onPress={() => setModalOpen(true)}/>
     </View>
    </View>
    </TouchableWithoutFeedback>
  );}


const styles = StyleSheet.create({
    s : {
        fontSize: 100
    },
    titleTopic2 : {
        fontWeight: 'bold',
        flexDirection: 'row',
        marginTop: 20
    },
    titleText : {
        fontWeight: 'bold',
        fontSize: 25
    },
    a : {
        backgroundColor: '#E8EAED',
        flex: 1
    },
    image : {
        width: 350,
        height: 300,
        backgroundColor: 'white',
        paddingLeft: 125,
        paddingTop: 125,
        marginLeft: 20,
        marginTop: 20
    },
    topic : {
        fontWeight: 'bold',
        fontSize: 30,
        paddingHorizontal: 65,
    },
    titleTopic : {
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    icon : {
        marginTop: 10,
        marginRight: 5
    },
    search: {
        flexDirection: 'row',
        marginTop:20,
    },
  background: {
    flex:1,
    backgroundColor: 'purple',
  },
  button : {
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 250,
    paddingHorizontal: 70,
  },
  KahootTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 330,
    textAlign: 'center',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addbutton: {
    marginTop: 550,
    paddingHorizontal: 25,
  },
});