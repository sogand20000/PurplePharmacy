import {View} from 'native-base';
import React from 'react';
import {Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './counterSlice';
//import styles from './Counter.module.css';
export const Counter = ({}: any) => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        onPress={() => dispatch(increment())}
        title="increment"
        color="#841584"
      />
      <Button
        onPress={() => dispatch(decrement())}
        title="decrement"
        color="#841584"
      />
      <Text>{count}</Text>

      <Text>cvcv</Text>
    </View>
  );
};
