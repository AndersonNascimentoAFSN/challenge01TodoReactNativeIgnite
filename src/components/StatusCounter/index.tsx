import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const colorStyle = {
  created: styles.created,
  completed: styles.completed,
};

interface IStatusCounterProps {
  titleStatus: string;
  totalStatus: number;
  colorType: 'created' | 'completed';
}

export function StatusCounter({
  titleStatus,
  totalStatus,
  colorType = 'created',
}: IStatusCounterProps) {
  return (
    <View style={styles.wrapperStatus}>
      <Text style={[styles.info, colorStyle[colorType]]}>{titleStatus}</Text>
      <Text style={styles.counter}>{totalStatus}</Text>
    </View>
  );
}
