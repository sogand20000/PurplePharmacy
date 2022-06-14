import React, {useEffect, useState} from 'react';
import {TouchableHighlight, View, Text, ScrollView} from 'react-native';
import {
  Box,
  FlatList,
  VStack,
  Image,
  Spinner,
  Divider,
  useToast,
} from 'native-base';
import {AraghijatModel} from './../../model/AraghijatModel'
import {style} from './../../assets/style/items'
import {Alert} from '../../components/alert';

export const AraghijatListScreen = ({navigation}: any) => {
  const [araghijats, setAraghijats] = useState<AraghijatModel[]>();
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch('/api/araghijat')
        .then(res => res.json())
        .then(json => {
          setAraghijats(json.araghijat);
          setLoading(false);
        });
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
      {loading && <Spinner />}
      <FlatList
        data={araghijats}
        keyExtractor={item => item._id + item.name}
        renderItem={item => (
          <TouchableHighlight
            onPress={() => navigation.navigate('AraghijatDetail', item.item)}>
            <VStack>
              <VStack style={style.item} direction="row">
                <Box>
                  <Image
                    source={require('../../assets/images/icons8-teapot-48.png')}
                    alt="دارو"
                  />
                </Box>
                <Box>
                  <Text style={style.parsianName}> {item.item.name}</Text>
                </Box>
              </VStack>
              <Divider style={style.Divider} />
            </VStack>
          </TouchableHighlight>
        )}></FlatList>
    </View>
  );
};
