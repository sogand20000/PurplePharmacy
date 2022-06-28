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
import {AraghijatModel} from './../../model/AraghijatModel';
import {styles} from '../../assets/style/items';
import {Alert} from '../../components/alert';
import {useTheme} from 'react-native-paper';

export const AraghijatListScreen = ({navigation}: any) => {
  const {colors} = useTheme();

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
              <Box style={styles.item} marginTop={5}>
                <VStack
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingRight: 10,
                  }}
                  marginLeft={5}>
                  <Image
                    source={require('../../assets/images/icons8-teapot-48.png')}
                    alt="عرقیجات"
                  />
                  <Text style={[styles.text, {color: colors.text}]}>
                    {item.item.name}
                  </Text>
                </VStack>
                <VStack></VStack>
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
