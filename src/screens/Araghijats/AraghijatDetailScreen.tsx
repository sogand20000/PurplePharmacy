import {ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Box, Divider, Heading, View} from 'native-base';
import {style} from '../../assets/style/detailStyle';
import {useTheme} from 'react-native-paper';

export const AraghijatDetailScreen = ({navigation, route}: any) => {
  const aragh = route.params;
  const {colors} = useTheme();

  useEffect(() => {
    navigation.setOptions({
      title: aragh.name,
    });
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          padding: 34,
        }}>
        <Box style={[style.Box, {backgroundColor: colors.background}]}>
          <Heading style={[style.Heading, {color: colors.text}]}>نام</Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>{aragh.name}</Text>
        </Box>

        <Box style={(style.Box, {backgroundColor: colors.background})}>
          <Heading style={[style.Heading, {color: colors.text}]}>طبیعت</Heading>
          <Divider style={style.Divider} />

          <Text style={[style.Text, {color: colors.text}]}>{aragh.tabiat}</Text>
        </Box>

        <Box style={(style.Box, {backgroundColor: colors.background})}>
          <Heading style={[style.Heading, {color: colors.text}]}>
            موارد مصرف
          </Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>
            {aragh.content}
          </Text>
          <Button
            color={colors.buttonColor}
            title="برگشت"
            onPress={() => navigation.pop()}></Button>
        </Box>
      </View>
    </ScrollView>
  );
};
