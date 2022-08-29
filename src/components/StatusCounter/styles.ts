import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapperStatus: {flexDirection: 'row'},
  info: {fontFamily: 'Inter', fontWeight: '700', fontSize: 14, lineHeight: 17},
  created: {
    color: '#4EA8DE',
    marginRight: 8,
  },
  completed: {color: '#8284FA', marginRight: 8},
  counter: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 999,
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: 15,
  },
});
