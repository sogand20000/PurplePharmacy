import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './counter/counterSlice';
export const AboutUsScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        onPress={() => dispatch(increment())}
        title="increment"
        color="#841584"
      />

      <Button title="خانه" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};
