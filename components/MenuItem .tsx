import { background } from 'native-base/lib/typescript/theme/styled-system';
import React, { useState } from 'react'
import { TouchableHighlight,Image,View,Text,StyleSheet ,Platform } 
from 'react-native';
const styles = StyleSheet.create({
    itemcontainer: {
      alignItems:'center',
      backgroundColor:Platform.OS==='android'?'#CCCCFF':'red',
     width:90,
      margin:5,
     marginTop:20,
     height:100,
    },
    
    itemImage:{
      resizeMode:'contain',
      width:80
    },
    itemText:{
      margin:10,
    }
    
  });
export const MenuItem=({navigation,img,text,onPress}:any)=>{
  
return(

    <TouchableHighlight onPress={onPress}>
       <View  style={styles.itemcontainer}>
           <Image source={img} style={styles.itemImage}></Image>
           <Text style={styles.itemText} >{text}</Text>
      </View>
    </TouchableHighlight>
);

}