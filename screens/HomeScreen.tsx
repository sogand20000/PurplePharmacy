import { Container } from 'native-base';
import React from 'react';
import {Button,ScrollView ,StyleSheet} from 'react-native';

import {Text,View} from 'react-native';
import {MenuItem} from '../components/MenuItem ';

const styles=StyleSheet.create({
  parent:{
     flexDirection:'row',
    justifyContent:'space-evenly',
    flexWrap:'wrap'
  }
})
  export const HomeScreen=({navigation}:any)=>{
    return (
    <ScrollView >
     
       <View style={styles.parent} >
         
             <MenuItem  img={require('../assets/images/icons8-pills-48.png')} text={'دارو'}></MenuItem>
             <MenuItem  img={require('../assets/images/icons8-hospital-3-48.png')} text={'دارو'}></MenuItem>
            
             <MenuItem  img={require('../assets/images/icons8-doctors-bag-48.png')} text={'داروخانه'}></MenuItem>
             <MenuItem  img={require('../assets/images/icons8-teapot-48.png')} text={'دمنوش'}></MenuItem>
             <MenuItem  img={require('../assets/images/icons8-cherry-48.png')} text={'میوه'}></MenuItem>
             <MenuItem  img={require('../assets/images/icons8-teapot-48.png')} text={'دمنوش'}></MenuItem>
             <MenuItem  img={require('../assets/images/icons8-natural-food-48.png')} text={'گیاهان'}></MenuItem>
             <MenuItem  img={require('../assets/images/icons8-teapot-48.png')} text={'دمنوش'}></MenuItem>
             <MenuItem  img={require('../assets/images/icons8-teapot-48.png')} text={'دمنوش'}></MenuItem>

             
       </View>
       <View>
       <Button
             title="درماره ما"
               onPress={() =>navigation.push('AboutUs')}></Button>
      </View>

    </ScrollView>
 
    )
}