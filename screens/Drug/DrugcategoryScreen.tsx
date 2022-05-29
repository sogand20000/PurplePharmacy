import {
  useToast,
  FlatList,
  Box,
  HStack,
  Avatar,
  CheckIcon,
  Icon,
  Image,
  VStack,
  Skeleton,
  Spinner,
  Divider,
} from 'native-base';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import React, {useEffect, useState} from 'react';
import {Button, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import api from '../../api';
import {DrugCategoryModel} from '../../model/DrugCategoryModel';
import {style} from '../../assets/style/items';
import {Alert} from '../../components/alert';
import DrugcategoryData from '../../Data/Drugcategory.json';
import realm from './../../Data/realm';
import Realm from 'realm';
const DrugcategoriesSchema = {
  name: 'Drugcategories',
  properties: {
    _id: 'int',
    name: 'string',
    persianName: 'string',
  },
  primaryKey: '_id',
};
export const DrugcategoryScreen = ({navigation}: any) => {
  const [drugcategorys, setDrugcategorys] = useState<
    Realm.Results<DrugCategoryModel>
  >(realm.objects('DrugCategory'));
  useEffect(() => {
    if (drugcategorys.length === 0) {
      realm.write(() => {
        DrugcategoryData.forEach(item => {
          realm.create('DrugCategory', item);
        });
        setDrugcategorys(realm.objects('DrugCategory'));
      });
    }
  }, []);

  /*  useEffect(() => {
    let realm;
    (async () => {
      //important thing use to schema for realm
      // Realm.clearTestState() very useful
      Realm.clearTestState();
      realm = await Realm.open({
        path: 'myrealm',
        schema: [DrugcategoriesSchema],
      })
        .then(realm => {
          const drugcat = realm.objects('Drugcategories');

          realm.write(() => {
            setData(drugcat);
          });
        })
        .catch(console.error);
    })();
  }, []); */

  /* const toast = useToast();
  useEffect(() => {
    //IIFE
    (async () => {
      try {
        let d = await (await api.get<DrugCategoryModel[]>('categories')).data;
        setData(d);
      } catch (e) {
        toast.show({
          render: () => {
            return <Alert text="اشکال در شبکه" type="error"></Alert>;
          },
        });
      }
    })();
  }, []); */

  return (
    <View>
      <FlatList
        data={drugcategorys}
        keyExtractor={item => item._id + item.name}
        renderItem={item => (
          <TouchableHighlight
            onPress={() => navigation.navigate('DrugList', item.item)}>
            <VStack>
              <Box style={style.item} marginTop={5}>
                <VStack>
                  <Text style={style.itemEnglishName}> {item.item.name}</Text>
                </VStack>
                <VStack marginLeft={5}>
                  <Image
                    source={require('../../assets/images/icons8-pills-48.png')}
                    alt="دارو"
                  />
                  <Text style={style.textStyle}> {item.item.persianName}</Text>
                </VStack>
                <Divider style={style.Divider} />
              </Box>
            </VStack>
          </TouchableHighlight>
        )}></FlatList>
      <Button title="برگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
