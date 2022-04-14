import { useToast,FlatList,Box, HStack, Avatar, CheckIcon, Icon ,Image, VStack, Skeleton, Spinner} from 'native-base';
import React, { useEffect, useState } from 'react';
import {Button, Text, TouchableHighlight, View,StyleSheet} from 'react-native';
import api from '../../api';
import {DrugCategoryModel} from '../../model/DrugCategoryModel'
const styles=StyleSheet.create({

  textStyle:{
       margin:15,
  },
  item:{
    //flexDirection:'row',
   //flexGrow:3,
   padding:5,
  },
  itemEnglishName:{
    fontSize:13,
    fontWeight:'900'
  }
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
          
          <FlatList data={data} renderItem={item=>(
            <TouchableHighlight onPress={()=>navigation.navigate('Drug',item.item)}>
               <VStack>
                 
                    <Box style={styles.item} borderBottomWidth="1" borderBottomColor="#46244C" marginTop={5}>
                    <VStack>
                      <Text style={styles.itemEnglishName} >  {item.item.name}</Text>
                    </VStack>
                    <VStack marginLeft={5}>
                        <Image source={require('../../assets/images/icons8-pills-48.png')}   alt="دارو" />
                        <Text style={styles.textStyle}> {item.item.persianName}</Text>
                    </VStack>
               </Box>
               </VStack>
            </TouchableHighlight>
          
          )}>
          </FlatList>
            <Text>{data.length}</Text>
            <Button title="خانه">

            </Button>
        </View>
    )
}