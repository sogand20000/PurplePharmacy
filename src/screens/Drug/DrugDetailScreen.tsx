import { Box, VStack ,Divider, Heading, Center ,Skeleton} from 'native-base';
import React, { useEffect } from 'react';
import {Button, Text, View,StyleSheet, ScrollView} from 'react-native';
import {DrugModel} from '../../model/DrugModel';
import {style} from "../../assets/style/detail";

export const DrugDetailScreen=({navigation, route}:any)=>{
  const drug: DrugModel = route.params;
     useEffect(() => {
      
      navigation.setOptions({
        title:drug.name,
      })
     }, [])
     
    return(
     
        <ScrollView >
         {drug.name.length===0 &&
          <Skeleton lines={4} px="4"/>
          &&
          <Skeleton.Text  px="4"/>
      }
          <Box style={style.Box}>
            <Heading style={style.Heading}>نام</Heading>
            <Divider  style={style.Divider}  />
            <Text style={style.Text}>{drug.name}</Text>
          </Box>
          
          <Box style={style.Box}>
            <Heading style={style.Heading}>موارد مصرف </Heading>
            <Divider   style={style.Divider} />
              <Text style={style.Text}>{drug.meghdarMasraf}</Text>
        </Box>

        <Box style={style.Box}>
            <Heading style={style.Heading}>مکانیزم اثر</Heading>
            <Divider   style={style.Divider} />
            <Text style={style.Text}>{drug.mechanism}</Text>
      </Box>
      
      <Box style={style.Box}>
       <Heading style={style.Heading}>هشدارها </Heading>
       <Divider   style={style.Divider} />
        <Text style={style.Text}>{drug.warning}</Text>
      </Box>

      <Box style={style.Box}>
           <Heading style={style.Heading}>مقدار مصرف</Heading>
           <Divider   style={style.Divider} />
            <Text style={style.Text}>{drug.meghdarMasraf} </Text>
        </Box>

        <Box style={style.Box}>
            <Heading style={style.Heading}>موارد منع مصرف</Heading>
            <Divider   style={style.Divider} />
             <Text style={style.Text}>{drug.noUsage} </Text>
        </Box>

          <Button  color='#9254C8'  title="برگشت" onPress={() =>navigation.pop()}></Button>
        </ScrollView>
    )
} 