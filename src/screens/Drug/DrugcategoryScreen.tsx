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
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from '../../assets/style/items';
import {Alert} from '../../components/alert';
import {DrugCategoryModel} from '../../model/DrugCategoryModel';
import {useTheme} from 'react-native-paper';

export const DrugcategoryScreen = ({navigation}: any) => {
  const {colors} = useTheme();

  const [drugcategorys, setDrugcategorys] = useState<DrugCategoryModel[]>();
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  useEffect(() => {
    try {
      (async () => {
        await fetch('/api/drugcategory')
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
              <Box style={styles.item} marginTop={5}>
                <VStack
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingRight: 10,
                  }}
                  marginLeft={5}>
                  <Image
                    source={require('../../assets/images/icons8-pills-48.png')}
                    alt="دارو"
                  />
                  <Text style={[styles.text, {color: colors.text}]}>
                    {item.item.persianName}
                  </Text>
                </VStack>
                <VStack>
                  <Text style={[styles.itemEnglishName, {color: colors.text}]}>
                    {item.item.name}
                  </Text>
                </VStack>
              </Box>
              <Divider
                style={[styles.divider, {borderColor: colors.iconColor}]}
              />
            </VStack>
          </TouchableHighlight>
        )}></FlatList>
    </View>
  );
};
