import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput,Button, Keyboard, ScrollView,FlatList,TouchableOpacity, Modal} from 'react-native';
import { globalStyles } from '../styles/global';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReviewForm from './reviewForm';

export default function SecondTab({navigation}) {

    const pressHandler = () => {
        navigation.goBack()
        }

const [ModalOpen,setModalOpen] = useState(false);

  return (
<View style={globalStyles.a}>
    <Modal visible={ModalOpen}  animationType='slide'>
        <View>
            <MaterialIcons
            name='close'
            size={40}
            onPress={() => setModalOpen(false)}
            />
            {/*<ReviewForm />*/}
            <Text> Hello</Text>
        </View>
    </Modal>
    <MaterialIcons
            name='add'
            size={40}
            onPress={() => setModalOpen(true)}
            />
    <Text style={styles.Name}> Hello {navigation.getParam('name')}</Text>
    <Button title='New questaion' onPress={() => navigation.navigate('QwesTab')}/>
</View> 
);}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'purple'
  },
  Name: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});