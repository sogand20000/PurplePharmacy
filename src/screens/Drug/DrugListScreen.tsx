import {Box, FlatList, VStack, Spinner, useToast, Divider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Button, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {DrugModel} from '../../model/DrugModel';
import {Alert} from '../../components/alert';
import {useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  englishName: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  Divider: {
    backgroundColor: 'purple',
  },
});

export const DrugListScreen = ({navigation, route}: any) => {
  const {colors} = useTheme();

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
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  height: 100,
                }}>
                <Box
                  style={{
                    flex: 1,
                    padding: 34,
                    flexDirection: 'row',

                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={[styles.englishName, {color: colors.text}]}>
                    {item.item.name}
                  </Text>
                </Box>
                <Divider
                  style={[styles.Divider, {borderColor: colors.iconColor}]}
                />
              </View>
            </VStack>
          </TouchableHighlight>
        )}></FlatList>
    </View>
  );
};
