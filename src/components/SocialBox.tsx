import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {SocialStyle} from '../../src/assets/style/SocialStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function SocialBox({icon}) {
  const {colors} = useTheme();

  return (
    <View>
      <TouchableOpacity style={SocialStyle.social}>
        <MaterialCommunityIcons
          name={icon}
          size={(hp('5%'), wp('10%'))}
          color={colors.iconColor}></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
}
