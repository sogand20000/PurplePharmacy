import React from 'react';
import {Button, Text, View} from 'react-native';
export const SearchScreen = ({navigation}: any) => {
  console.log('>>>>>>>SearchScreen<<<<<');
  return (
    <View>
      <Button title="خانه" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};
