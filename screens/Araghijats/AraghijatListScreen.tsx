import React, { useEffect, useState } from 'react';
import { TouchableHighlight, View,Text, ScrollView } from "react-native"
import { Box, FlatList, VStack,Image, Spinner,Divider, useToast, Heading, Center } from 'native-base';
import api from "../../api"
import { AraghijatModel } from "../../model/AraghijatModel";
import {style} from "../../assets/style/items";
import {Alert} from "../../components/alert"
export const AraghijatListScreen=({navigation}: any) => {

 const [data,setData]=useState<AraghijatModel[]>([]);
 const toast = useToast();
useEffect(() => {
  //IIFE
  (async () => {
    try {

     let response = await api.get<AraghijatModel[]>(`Araghijat`,);
    setData(response.data);
    } catch (e) {
      toast.show({
        render:()=>{
          return <Alert text="اشکال در شبکه"type="message"></Alert>
        }
      });
    }
  })();
}, []);

   
    return(

        <View>
           
            <FlatList data={data} 
            keyExtractor={item => item.id + item.Name} 
              renderItem={item=>(
                <TouchableHighlight onPress={()=>navigation.navigate('AraghijatDetail',item.item)}>
            <VStack>
               <VStack style={style.item} direction="row">
                 <Box>
                    <Image source={require('../../assets/images/icons8-teapot-48.png')}   alt="دارو" />
                 </Box>
                 <Box>
                 <Text style={style.parsianName} >  {item.item.Name}</Text>
                 </Box>
            </VStack> 
            <Divider   style={style.Divider} />

               </VStack>
             </TouchableHighlight>
            )}>

</FlatList> 
        </View>
    )
}
 