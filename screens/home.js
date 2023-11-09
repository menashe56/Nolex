import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Keyboard, ScrollView,FlatList,Alert,TouchableWithoutFeedback} from 'react-native';
import ReviewForm from './reviewForm';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from './CustomTextInput';


export default function Home({navigation}) {

const [name,setName] = useState('');

const pressHandler = () => {
    if(name.length>3){
        navigation.navigate('SecondTab',{name})
    }else{
            Alert.alert('OOPS!','Name must be over 3 chars long',[
                {text: 'OK'}
            ])
        }
    }

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
<View style={styles.background}>
<View style={styles.tasksWrapper}>
<View style={styles.search}>
       <TextInput
        style={styles.input}
        placeholder='Enter a topic'
      />
      <Button title='Search'/>
    </View>
    <Text style={styles.KahootTitle}>Kahoot!</Text>
    <TextInput 
    style={styles.input} 
    placeholder = 'Enter your name'
    onChangeText={(value) => {setName(value)}}
    />
    {/*
    <FlatList
     data={person}
     renderItem={({item}) =>(
        <TouchableOpacity onPress={() => navigation.navigate('SecondTab',item)}>
            <Text style={styles.KahootTitle}>{item.name}</Text>
        </TouchableOpacity>
     )}
     />
     */}
      <View style={styles.button}>
        <Button title='Enter' onPress={pressHandler}/>
      </View>
</View>
</View> 
</TouchableWithoutFeedback>
);}

const styles = StyleSheet.create({
    search: {
        marginTop: '20',
        marginBottom: '10',
        padding: '20'

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
    width: 250,
    textAlign: 'center',
    marginHorizontal: '20'
    
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
  addText: {},
});