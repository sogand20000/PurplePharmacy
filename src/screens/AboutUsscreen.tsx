import React from 'react';
import {Button, Text, View} from 'react-native';
export const AboutUsScreen = ({navigation}: any) => {
  console.log('>>>>>>>log<<<<<');
  return (
    <View>
      <Button title="خانه" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};
