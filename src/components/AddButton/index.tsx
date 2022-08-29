import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

interface IAddButtonProps extends TouchableOpacityProps {}

export function AddButton({...rest}: IAddButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...rest}>
      <View style={styles.addTaskButtonContainerIcon}>
        <Icon name="circle-thin" size={16} color="#F2F2F2" />
        <Icon
          name="plus"
          size={12}
          color="#F2F2F2"
          style={styles.addTaskButtonIcon}
        />
      </View>
    </TouchableOpacity>
  );
}
