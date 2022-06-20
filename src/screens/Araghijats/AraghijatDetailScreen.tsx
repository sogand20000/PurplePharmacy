import {ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Box, Divider, Heading} from 'native-base';
import {style} from '../../assets/style/detailStyle';

export const AraghijatDetailScreen = ({navigation, route}: any) => {
  const aragh = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: aragh.name,
    });
  }, []);

  return (
    <ScrollView>
      <Box style={style.Box}>
        <Heading style={style.Heading}>نام</Heading>
        <Divider style={style.Divider} />
        <Text style={style.Text}>{aragh.name}</Text>
      </Box>

      <Box style={style.Box}>
        <Heading style={style.Heading}>طبیعت</Heading>
        <Divider style={style.Divider} />
        <Text style={style.Text}>{aragh.tabiat}</Text>
      </Box>

      <Box style={style.Box}>
        <Heading style={style.Heading}>موارد مصرف </Heading>
        <Divider style={style.Divider} />
        <Text style={style.Text}>{aragh.content}</Text>
      </Box>
    </ScrollView>
  );
};
