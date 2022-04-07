import React from 'react';
import {Button,ScrollView } from 'react-native';

import {Text,View} from 'react-native';
import {MenuItem} from '../components/MenuItem ';
  export const HomeScreen=({navigation}:any)=>{
    return (
    <ScrollView >
       <View>
             <Text> HOME </Text>
             <MenuItem></MenuItem>
             <Button
             title="HOME"
               onPress={() =>navigation.push('AboutUs')}></Button>
       </View>
    </ScrollView>
 
    )
}