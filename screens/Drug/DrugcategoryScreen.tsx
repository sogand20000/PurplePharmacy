import {
  useToast,
  FlatList,
  Box,
  Image,
  VStack,
  Spinner,
  Divider,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Button, Text, TouchableHighlight, View} from 'react-native';
import {style} from '../../assets/style/items';
import {Alert} from '../../components/alert';
import {DrugCategoryModel} from '../../model/DrugCategoryModel';

export const DrugcategoryScreen = ({navigation}: any) => {
  const [drugcategorys, setDrugcategorys] = useState<DrugCategoryModel[]>();
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  useEffect(() => {
    try {
      (async () => {
        await await fetch('/api/drugcategory')
          .then(res => res.json())
          .then(json => {
            setDrugcategorys(json.drugcategory);
            setLoading(false);
          });
      })();
    } catch (error) {
      toast.show({
        render: () => {
          return <Alert text="اشکال در شبکه" type="error"></Alert>;
        },
      });
    }
  }, []);

  return (
    <View>
      {loading && <Spinner></Spinner>}
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
