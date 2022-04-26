import { useToast,FlatList,Box, HStack, Avatar, CheckIcon, Icon ,Image, VStack, Skeleton, Spinner,Divider} from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import React, { useEffect, useState } from 'react';
import {Button, Text, TouchableHighlight, View,StyleSheet} from 'react-native';
import api from '../../api';
import {DrugCategoryModel} from '../../model/DrugCategoryModel';
import {style} from "../../assets/style/items";
import {Alert} from "../../components/alert"

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
             render:()=>{
          return <Alert text="اشکال در شبکه" type="error"></Alert>
        }
          });
        }
      })();
    }, []);
   
    
    return(
        <View>
          {data.length===0 && <Spinner color="indigo.500"/>}
          
          <FlatList data={data} keyExtractor={item => item.id + item.name}   renderItem={item=>(
            <TouchableHighlight onPress={()=>navigation.navigate('DrugList',item.item)}>
               <VStack>
                 
                    <Box style={style.item} marginTop={5}>
                    <VStack>
                      <Text style={style.itemEnglishName} >  {item.item.name}</Text>
                    </VStack>
                    <VStack marginLeft={5}>
                        <Image source={require('../../assets/images/icons8-pills-48.png')}   alt="دارو" />
                        <Text style={style.textStyle}> {item.item.persianName}</Text>
                    </VStack>
                    <Divider   style={style.Divider} />
               </Box>
               </VStack>
            </TouchableHighlight>
          
          )}>
          </FlatList>
          <Button   title="برگشت" onPress={() =>navigation.pop()}></Button>
        </View>
    )
}