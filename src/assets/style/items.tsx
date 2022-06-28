import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  text: {
    margin: wp('3%'),
    fontSize: wp('5%'),
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  itemEnglishName: {margin: 10, fontSize: wp('4%')},
  parsianName: {
    marginTop: wp('3%'),
    marginLeft: wp('3%'),

    fontSize: wp('2%'),
  },
  divider: {
    borderWidth: wp('0.3%'),
  },
});

export {styles};
