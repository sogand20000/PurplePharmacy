import {Box, FlatList, VStack, Image, Spinner, Divider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import {DrugModel} from '../../model/DrugModel';
import DrugData from '../../Data/drug.json';
/* import realm from './../../Data/realm';
 */
const styles = StyleSheet.create({
  englishName: {
    fontSize: 13,
    fontWeight: '900',
  },
  Divider: {
    backgroundColor: 'purple',
    width: 400,
  },
});

export const DrugListScreen = ({navigation, route}: any) => {
  const [loading, setLoading] = useState(false);
  const [drugs, setDrus] = useState<DrugModel>();
  useEffect(() => {
   /*  realm.write(() => {
      if (drugs.length === 0) {
        DrugData.forEach(item => {
          realm.create('Drug', item);
        });
      }

      let items = realm
        .objects<DrugModel>('Drug')
        .filtered('categoryId==$0', route.params._id); //route.params.id

      setDrus(items);
      setLoading(false);
    }); */
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: ' دارو دسته ' + route.params.persianName,
    });
  }, []);

  return (
    <View>
      {loading && <Spinner />}
      {/* <FlatList
        data={drugs}
         onEndReached={nextPage} 
        keyExtractor={item => ' ' + item._id}
          refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={refresh}></RefreshControl>
        } 
        renderItem={item => (
          <TouchableHighlight
            onPress={() => navigation.navigate('DrugDetail', item.item)}>
            <VStack>
              <Box marginTop={1}>
                <Text style={styles.englishName}>{item.item.name}</Text>
                <Image
                  source={require('../../assets/images/icons8-pills-48.png')}
                  alt="دارو"
                />
              </Box>
              <Divider style={styles.Divider} />
            </VStack>
          </TouchableHighlight>
        )}></FlatList> */}
      <Button title="برگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
