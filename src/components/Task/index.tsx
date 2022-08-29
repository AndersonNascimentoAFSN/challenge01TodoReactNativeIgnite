import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

interface ITask extends TouchableOpacityProps {
  task: {id: number; name: string; isCompleted?: boolean};
  onCompleteTask: () => void;
}

export function Task({task, onCompleteTask, ...rest}: ITask) {
  return (
    <View style={styles.taskWrapper}>
      <BouncyCheckbox
        fillColor="#5E60CE"
        // unfillColor="#4EA8DE"
        // innerIconStyle={{borderWidth: 2, borderColor: '#4EA8DE'}}
        // iconStyle={styles.checkbox}
        style={styles.taskCheckBox}
        onPress={onCompleteTask}
      />
      <Text
        style={[styles.taskText, task.isCompleted && styles.taskCompletedText]}>
        {task.name}
      </Text>
      <TouchableOpacity style={styles.taskButton} {...rest}>
        <Icon name="trash" size={20} color="#808080" style={styles.taskIcon} />
      </TouchableOpacity>
    </View>
  );
}
