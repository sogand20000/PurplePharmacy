import colors from 'native-base/lib/typescript/theme/base/colors';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import React, {useState} from 'react';
import {
  TouchableHighlight,
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import {useTheme} from 'react-native-paper';
const styles = StyleSheet.create({
  itemcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    margin: 5,
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 70,
  },
  itemcontainerHover: {
    backgroundColor: 'red',
  },
  itemImage: {
    width: 80,
    height: 80,
  },
  itemText: {
    margin: 10,
    fontSize: 15,
  },
});
export const MenuItem = ({navigation, img, text, onPress}: any) => {
  const {colors} = useTheme();

  return (
    <TouchableHighlight onPress={onPress}>
      <View
        style={[styles.itemcontainer, {backgroundColor: colors.backgroundBox}]}>
        <Image source={img} style={styles.itemImage}></Image>
        <Text style={[styles.itemText, {color: colors.text}]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
