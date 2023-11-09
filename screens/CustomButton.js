import React from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = ({text,icon,onPress}) => {
  return (
    <TouchableOpacity  onPress={onPress}>
    <View style={styles.button}>
      <Icon name={icon} size={40} style={styles.icon}/>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    textAlign: 'center',
  },
  icon: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 55,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
    flexDirection:'row',
    height: 60
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 22,
    textAlign: 'center',
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
});

export default CustomTextInput;
