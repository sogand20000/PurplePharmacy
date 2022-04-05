import React from 'react';
import {Button,ScrollView } from 'react-native';

import {Text,View} from 'react-native';
    
  export const HomeScreen=({navigation}:any)=>{
    return (
    <ScrollView >
       <View>
             <Text> HOME </Text>
             <Button
             title="HOME"
               onPress={() =>navigation.push('AboutUs')}></Button>
       </View>
    </ScrollView>
 
    )
}