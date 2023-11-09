import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

 
  useEffect(() => {
    // Fetch data from your server's API endpoint
    fetch('http://10.0.0.14:3000/api/fetch')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Store the fetched data in the component's state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <Text>Data from PostgreSQL:{data.length}</Text>
      {data.map((item, index) => (
      <View key={index}>
        <Text style={styles.s}>{item.id}</Text>
        <Text>{item.topic}</Text>
      </View>
    ))}
    </View>
  );
}
