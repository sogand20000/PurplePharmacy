import {InputLeftAddon, Row} from 'native-base';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  itemEnglishName: {margin: 10, fontSize: 20},
  parsianName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    //  fontWeight: '900',
  },
  Divider: {
    borderWidth: 2,
    //borderColor: 'purple',
  },
});

export {styles};
