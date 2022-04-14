import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
export const DrugScreen=({navigation, route}: any) => {
  useEffect(() => {
    navigation.setOptions({
    title:' دارو دسته ' + route.params.persianName,
    
    })
    console.log(route.params)

  }, [])
  
    return(
        <View>
       
          <Button
             title="خانه"
               onPress={() =>navigation.navigate('Home')}></Button>
        </View>
    )
} 