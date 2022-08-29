import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

export function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')} />
    </View>
  );
}
