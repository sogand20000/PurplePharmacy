import { useToast,FlatList,Box, HStack, Avatar, CheckIcon, Icon ,Image, VStack, Skeleton, Spinner,Divider} from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import React, { useEffect, useState } from 'react';
import {Button, Text, TouchableHighlight, View,StyleSheet} from 'react-native';
import api from '../../api';
import {DrugCategoryModel} from '../../model/DrugCategoryModel'
const styles=StyleSheet.create({

  textStyle:{
       margin:15,
  },
  item:{
    padding:5,
  },
  itemEnglishName:{
    fontSize:13,
    fontWeight:'900'
  },
  Divider:{
    backgroundColor:"purple",
     width:400,
  },
})

export const DrugcategoryScreen=({navigation}:any)=>{
    const [data,setData]=useState<DrugCategoryModel[]>([]);
    
    const toast = useToast();
    useEffect(() => {
      //IIFE
      (async () => {
        try {
          let d = await (await api.get<DrugCategoryModel[]>('categories')).data;
          setData(d);
         
        } catch (e) {
          toast.show({
            description: 'اشکال در شبکه',
          });
        }
      })();
    }, []);
   
    
    return(
        <View>
          {data.length===0 && <Spinner color="indigo.500"/>}
          
          <FlatList data={data} keyExtractor={item => item.id + item.name}   renderItem={item=>(
            <TouchableHighlight onPress={()=>navigation.navigate('DrugLis',item.item)}>
               <VStack>
                 
                    <Box style={styles.item} marginTop={5}>
                    <VStack>
                      <Text style={styles.itemEnglishName} >  {item.item.name}</Text>
                    </VStack>
                    <VStack marginLeft={5}>
                        <Image source={require('../../assets/images/icons8-pills-48.png')}   alt="دارو" />
                        <Text style={styles.textStyle}> {item.item.persianName}</Text>
                    </VStack>
                    <Divider   style={styles.Divider} />
               </Box>
               </VStack>
            </TouchableHighlight>
          
          )}>
          </FlatList>
          <Button   title="برگشت" onPress={() =>navigation.pop()}></Button>
        </View>
    )
}