import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

interface IEmptyProps {
  title: string;
  subtitle: string;
}

export function Empty({title, subtitle}: IEmptyProps) {
  return (
    <View style={styles.empty}>
      <Image
        style={styles.clipboard}
        source={require('../../assets/clipboard.png')}
      />
      <Text style={[styles.emptyText, styles.emptyTitle]}>{title}</Text>
      <Text style={[styles.emptyText, styles.emptySubTitle]}>{subtitle}</Text>
    </View>
  );
}
