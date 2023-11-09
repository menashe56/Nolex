import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Axios from 'axios';

const InsertDataComponent = () => {
    const [Roll, setRoll] = useState('');
    const [Name, setName] = useState('');

    const handleInsertData = () => {
        const dataToInsert = { Roll, Name };
      
        Axios.post('http://10.0.0.14:3000/api/insert', { data: dataToInsert })
          .then((response) => {
            console.log('Server response status:', response.status);
            return response.data;
          })
          .then((data) => {
            console.log('Data inserted successfully:', data);
          })
          .catch((error) => {
            console.error('Error inserting data:', error);
          });
      };
      
  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={Name} onChangeText={(text) => setName(text)} />
      <Text>Roll:</Text>
      <TextInput value={Roll} onChangeText={(text) => setRoll(text)} />
      <Button title="Insert Data" onPress={handleInsertData} />
    </View>
  );
};

export default InsertDataComponent;
