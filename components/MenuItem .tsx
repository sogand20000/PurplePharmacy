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
     marginTop:20
    },
    
    itemImage:{
      resizeMode:'contain',
      width:80
    },
    itemText:{
      margin:10,
    }
    
  });
export const MenuItem=({navigation,img,text}:any)=>{
  const [style, setStyle] = useState('');
const changeStyle=()=>{
  console.log("change")
  setStyle('#F2FA5A')
}
return(

    <TouchableHighlight  activeOpacity={0.5} >
       <View  style={styles.itemcontainer}>
           <Image source={img} style={styles.itemImage}></Image>
           <Text style={styles.itemText} >{text}</Text>
      </View>
    </TouchableHighlight>
);

}