import React from 'react';
import {Button, ScrollView, StyleSheet, Image} from 'react-native';

import {Text, View} from 'react-native';
import {MenuItem} from '../components/MenuItem';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 40,
  },
});
export const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={styles.row}>
        <MenuItem
          img={require('../assets/images/icons8-hospital-3-48.png')}
          text={'دسته بندی داروها'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
        <MenuItem
          img={require('../assets/images/icons8-teapot-48.png')}
          text={'عرقیجات'}
          onPress={() => navigation.navigate('AraghijatList')}></MenuItem>
        <MenuItem
          img={require('../assets/images/icons8-doctors-bag-48.png')}
          text={'داروخانه'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
      </View>
      <View style={styles.row}>
        <MenuItem
          img={require('../assets/images/icons8-cherry-48.png')}
          text={'میوه'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
        <MenuItem
          img={require('../assets/images/icons8-teapot-48.png')}
          text={'دمنوش'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
        <MenuItem
          img={require('../assets/images/icons8-natural-food-48.png')}
          text={'گیاهان'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
      </View>
      <View style={styles.row}>
        <MenuItem
          img={require('../assets/images/icons8-teapot-48.png')}
          text={'دمنوش'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
        <MenuItem
          img={require('../assets/images/icons8-teapot-48.png')}
          text={'دمنوش'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
        <MenuItem
          img={require('../assets/images/icons8-teapot-48.png')}
          text={'دمنوش'}
          onPress={() => navigation.navigate('DrugcategoryScreen')}></MenuItem>
      </View>
    </ScrollView>
  );
};
