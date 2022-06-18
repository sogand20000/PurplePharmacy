import {Row} from 'native-base';
import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  textStyle: {
    margin: 15,
  },
  item: {
    margin: 10,
    flexflow: Row,
  },

  itemEnglishName: {
    fontFamily: 'IndieFlower-Regular',

    fontSize: 13,
    fontWeight: '900',
  },
  parsianName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '900',
  },
  Divider: {
    backgroundColor: 'purple',
    width: 400,
  },
});

export {style};
