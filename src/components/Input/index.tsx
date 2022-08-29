import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

interface IInputProps extends TextInputProps {}

export function Input({...rest}: IInputProps) {
  return <TextInput style={styles.input} {...rest} />;
}
