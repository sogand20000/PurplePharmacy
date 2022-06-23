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
  itemContainer: {
    alignItems: 'center',
    width: 110,
    height: 110,
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
        <Text style={[styles.itemText, {color: colors.text}]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
