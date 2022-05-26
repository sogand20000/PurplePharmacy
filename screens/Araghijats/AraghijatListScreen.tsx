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
  Heading,
  Center,
} from 'native-base';
import api from '../../api';
import {AraghijatModel} from '../../model/AraghijatModel';
import {style} from '../../assets/style/items';
import {Alert} from '../../components/alert';
import Realm from 'realm';
const AraghijatSchema = {
  name: 'Araghijat1',
  properties: {
    _id: 'int',
    name: 'string',
    tabiat: 'string?',
    content: 'string?',
  },
  primaryKey: '_id',
};

export const AraghijatListScreen = ({navigation}: any) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    let realm;
    (async () => {
      Realm.clearTestState();

      realm = await Realm.open({
        path: 'myrealm',
        schema: [AraghijatSchema],
      })
        .then(realm => {
          const Araghijats = realm.objects('Araghijat1');
          console.log(realm.isClosed);

          realm.write(() => {
            setData(Araghijats);
          });
        })
        .catch(console.error);
    })();
  }, []);

  const toast = useToast();
  useEffect(() => {
    //IIFE
    (async () => {
      try {
        /*  let response = await api.get<AraghijatModel[]>(`Araghijat`);
        setData(response.data); */
      } catch (e) {
        toast.show({
          render: () => {
            return <Alert text="اشکال در شبکه" type="message"></Alert>;
          },
        });
      }
    })();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
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
