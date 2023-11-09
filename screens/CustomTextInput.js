import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = ({ icon, placeholder}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    marginRight: 10,
    fontSize: 20, // Adjust the icon size as needed
    color: '#777', // Adjust the icon color as needed
  },
  input: {
    flex: 1,
  },
});

export default CustomTextInput;
