import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const style = StyleSheet.create({
  Heading: {
    textAlign: 'center',
    marginBottom: wp('3%'),
  },

  Text: {
    paddingTop: 20,
    fontSize: wp('5%'),
    marginBottom: wp('6%'),
    textAlign: 'justify',
    lineHeight: hp('6%'),
  },

  Divider: {
    borderWidth: wp('0.3%'),
  },

  Box: {
    flex: 1,
    alignItems: 'center',
    marginBottom: wp('2%'),
    marginTop: wp('2%'),
  },
});

export {style};
