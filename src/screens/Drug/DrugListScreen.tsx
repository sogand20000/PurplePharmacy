import {
  Box,
  FlatList,
  VStack,
  Image,
  Spinner,
  Divider,
  Toast,
  useToast,
} from 'native-base';
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
import {Alert} from '../../components/alert';

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
  const [loading, setLoading] = useState(true);
  const [drugs, setDrus] = useState<DrugModel[]>();
  const [page, setPage] = useState(1);
  const toast = useToast();

  useEffect(() => {
    try {
      /* let response = await api.get<DrugModel[]>(
    `drugs?categoryId=${route.params.id}&_limit=20&_page=${page}`,
  ); */
      (async () => {
        await fetch(`/api/drug/${route.params._id}/`)
          .then(res => res.json())
          .then(json => {
            setDrus(json.drug);
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

  useEffect(() => {
    navigation.setOptions({
      title: ' دارو دسته ' + route.params.persianName,
    });
  }, []);
  /*  const nextPage = () => {
    setPage(page + 1);
  };
  const refresh = () => {
    setPage(1);
  }; */

  return (
    <View>
      {loading && <Spinner />}
      <FlatList
        data={drugs}
        /*   onEndReached={nextPage} */
        keyExtractor={item => ' ' + item._id}
        /*  refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={refresh}></RefreshControl>
        } */
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
        )}></FlatList>
      <Button title="برگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
