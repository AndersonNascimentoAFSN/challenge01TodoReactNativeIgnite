import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E6F9F',
    padding: 18,
    borderRadius: 6,
    width: 54,
    height: 54,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskButtonContainerIcon: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // width: 20,
    // height: 20,
  },
  addTaskButtonIcon: {position: 'absolute', zIndex: 99, border: 'none'},
});
