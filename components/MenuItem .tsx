import { background } from 'native-base/lib/typescript/theme/styled-system';
import React from 'react'
import { TouchableHighlight,Image,View,Text,StyleSheet  } from 'react-native';
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 200,
      height: 200,
    },
  });
export const MenuItem=({navigation}:any)=>{
return(
    <TouchableHighlight>
       <View>
           <Image source={require('../assets/images/drug.png')}  ></Image>
           <Image style={styles.tinyLogo} source={{ 
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}  ></Image>
         <Image style={styles.logo} source={{ 
          uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Pivot_Wave.gif',
        }}  ></Image>

      </View>
    </TouchableHighlight>
);

}