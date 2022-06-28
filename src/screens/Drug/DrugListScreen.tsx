import {Box, FlatList, VStack, Spinner, useToast, Divider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {DrugModel} from '../../model/DrugModel';
import {Alert} from '../../components/alert';
import {useTheme} from 'react-native-paper';
import {styles} from '../../assets/style/items';

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
              <View style={styles.item}>
                <Box
                  style={{
                    flex: 1,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}>
                  <View>
                    <Text style={[styles.text, {color: colors.text}]}>
                      نام دارو :
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.text, {color: colors.text}]}>
                      {item.item.name}
                    </Text>
                  </View>
                </Box>
                <Divider
                  style={[styles.divider, {borderColor: colors.iconColor}]}
                />
              </View>
            </VStack>
          </TouchableHighlight>
        )}></FlatList>
    </View>
  );
};
