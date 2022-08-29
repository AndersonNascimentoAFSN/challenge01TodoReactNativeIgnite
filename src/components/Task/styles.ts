import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
    backgroundColor: '#262626',
    paddingTop: 12,
    paddingRight: 8,
    paddingLeft: 12,
    paddingBottom: 12,
    marginTop: 8,
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    borderRadius: 8,
  },
  taskCheckBox: {},
  taskText: {
    color: '#F2F2F2',
    width: 209,
    marginLeft: 8,
    marginRight: 18,
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '400',
  },
  taskCompletedText: {textDecorationLine: 'line-through', color: '#808080'},
  taskButton: {},
  taskIcon: {},
});
