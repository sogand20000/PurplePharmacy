import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './../../assets/style/ProfileScreenStyle';
import {useTheme} from 'react-native-paper';

export const ProfileScreen = ({navigation}: any) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', paddingBottom: 30}}>
          <Avatar.Image
            style={styles.userImg}
            source={require('./../../assets/images/Ghanavati_Profile.jpg')}
            size={160}></Avatar.Image>
          <Text style={[styles.userName, {color: colors.text}]}>
            Somayeh Ghanavati
          </Text>
          <Text style={[styles.aboutUser, {color: colors.text}]}>
            Im somayeh Ghanavati
          </Text>
          <View style={styles.userBtnWrapper}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Text style={[styles.userBtnTxt, {color: colors.text}]}>
                ویرایش
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userBtn}>
              <Text style={[styles.userBtnTxt, {color: colors.text}]}>
                دنبال کردن
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialIcons
              name="map"
              color={colors.iconColor}
              size={20}></MaterialIcons>
            <Text style={[{marginLeft: 20}, {color: colors.text}]}>
              Ahvaz,Iran
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons
              name="phone"
              color={colors.iconColor}
              size={20}></MaterialIcons>
            <Text style={[{marginLeft: 20}, {color: colors.text}]}>
              +98-9333818137
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons
              name="email"
              color={colors.iconColor}
              size={20}></MaterialIcons>
            <Text style={[{marginLeft: 20}, {color: colors.text}]}>
              s.ghanavati94@gmail.com
            </Text>
          </View>
          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {borderRightColor: '#dddddd', borderRightWidth: 1},
              ]}>
              <Title>$140</Title>
              <Caption>Wallet</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>12</Title>
              <Caption>Orders</Caption>
            </View>
          </View>
          <View>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  color={colors.buttonColor}
                  size={25}></MaterialCommunityIcons>
                <Text style={[styles.menuItemText, {color: colors.text}]}>
                  Your Favorites
                </Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="credit-card"
                  color={colors.buttonColor}
                  size={25}></MaterialCommunityIcons>
                <Text style={[styles.menuItemText, {color: colors.text}]}>
                  Payment
                </Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  color={colors.buttonColor}
                  size={25}></MaterialCommunityIcons>
                <Text style={[styles.menuItemText, {color: colors.text}]}>
                  Tell Your Friends
                </Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="account-check-outline"
                  color={colors.buttonColor}
                  size={25}></MaterialCommunityIcons>
                <Text style={[styles.menuItemText, {color: colors.text}]}>
                  Support
                </Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
