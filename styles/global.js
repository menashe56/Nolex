import React, {useState} from 'react';
import {StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  a: {
    backgroundColor: 'purple'
  },
});

export const images = {
  rating: {
    '1' : require('../assets/images/kahoot.jpg')
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
  },
}