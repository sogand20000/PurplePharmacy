import React from 'react';
import {TouchableHighlight, Image, View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  itemImage: {
    resizeMode: 'stretch',
  },
});
export const MenuItem = ({img, text, onPress}: any) => {
  const {colors} = useTheme();

  return (
    <TouchableHighlight onPress={onPress}>
      <View
        style={[styles.itemContainer, {backgroundColor: colors.backgroundBox}]}>
        <Image source={img} style={styles.itemImage}></Image>
        <Text style={[{fontSize: wp('4%')}, {color: colors.text}]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
