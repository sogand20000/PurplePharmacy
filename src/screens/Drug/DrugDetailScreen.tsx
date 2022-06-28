import {Box, VStack, Divider, Heading, Center, Skeleton} from 'native-base';
import React, {useEffect} from 'react';
import {Button, Text, View, StyleSheet, ScrollView} from 'react-native';
import {DrugModel} from '../../model/DrugModel';
import {style} from '../../assets/style/detailStyle';
import {useTheme} from 'react-native-paper';

export const DrugDetailScreen = ({navigation, route}: any) => {
  const {colors} = useTheme();

  const drug: DrugModel = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: ' توضیحات دارو ' + drug.name,
    });
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          padding: 34,
        }}>
        {drug.name.length === 0 && <Skeleton lines={4} px="4" /> && (
          <Skeleton.Text px="4" />
        )}
        <View style={style.Box}>
          <Heading style={[style.Heading, {color: colors.text}]}>نام</Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>{drug.name}</Text>
        </View>

        <Box style={style.Box}>
          <Heading style={[style.Heading, {color: colors.text}]}>
            موارد مصرف
          </Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>
            {drug.meghdarMasraf}
          </Text>
        </Box>

        <Box style={style.Box}>
          <Heading style={[style.Heading, {color: colors.text}]}>
            مکانیزم اثر
          </Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>
            {drug.mechanism}
          </Text>
        </Box>

        <Box style={style.Box}>
          <Heading style={[style.Heading, {color: colors.text}]}>
            هشدارها
          </Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>{drug.warning}</Text>
        </Box>

        <Box style={style.Box}>
          <Heading style={[style.Heading, {color: colors.text}]}>
            مقدار مصرف
          </Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>
            {drug.meghdarMasraf}
          </Text>
        </Box>

        <Box style={style.Box}>
          <Heading style={[style.Heading, {color: colors.text}]}>
            موارد منع مصرف
          </Heading>
          <Divider style={style.Divider} />
          <Text style={[style.Text, {color: colors.text}]}>{drug.noUsage}</Text>
        </Box>

        <Button
          color={colors.buttonColor}
          title="برگشت"
          onPress={() => navigation.pop()}></Button>
      </View>
    </ScrollView>
  );
};
