import { Box, FlatList, VStack,Image, Spinner,Divider } from 'native-base';
import React, { useEffect, useState } from 'react';
import {Button, Text, TouchableHighlight, View,StyleSheet, RefreshControl} from 'react-native';
import api from '../../api';
import {DrugModel} from '../../model/DrugModel'


const styles=StyleSheet.create({

  englishName:{
    fontSize:13,
    fontWeight:'900'
  },
  Divider:{
    backgroundColor:"purple",
     width:400,
  },
})

export const DrugListScreen=({navigation, route}: any) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<DrugModel[]>([]);
  const [loading, setLoading] = useState(false);
useEffect(() => {
  LoadData(page);
}, [page])

const LoadData=async (page:number) => {
  setLoading(true);
  let response = await api.get<DrugModel[]>(
    `drugs?categoryId=${route.params.id}&_limit=20&_page=${page}`,
  );
 if(page===1){
   setData(response.data);
 }
 else{
  setData([...data,...response.data]);
 }
 setLoading(false)
}
  useEffect(() => {
    navigation.setOptions({
    title:' دارو دسته ' + route.params.persianName,
    })
    
  }, [])
  
  const nextPage=()=>{
    setPage(page+1);
  }
  const refresh=()=>{
    setPage(1);
  }
    return(
     <View>
       {loading && <Spinner/>}
       <FlatList  data={data}  
       onEndReached={nextPage}
       keyExtractor={item => item.id + item.mechanism}
       refreshControl={ <RefreshControl
        refreshing={false}
        onRefresh={refresh}></RefreshControl>
       }
       renderItem={item=>(
            <TouchableHighlight onPress={()=>navigation.navigate('DrugDetail',item.item)}>
               <VStack>
                    <Box marginTop={1}>
                      <Text style={styles.englishName}>{item.item.name}</Text>
                        <Image source={require('../../assets/images/icons8-pills-48.png')}   alt="دارو" />
                 </Box>
                 <Divider   style={styles.Divider} />

               </VStack>
            </TouchableHighlight>
          
          )}>
          </FlatList>
          <Button  title="برگشت" onPress={() =>navigation.pop()}></Button>
        </View>
    )
} 