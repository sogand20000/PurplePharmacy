import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';

import InputField from '../../components/InputFiled';

export const ProfileScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', paddingBottom: 30}}>
          <Avatar.Image
            source={require('./../../assets/images/Ghanavati_Profile.jpg')}
            size={160}></Avatar.Image>
          <Text style={styles.userName}>Somayeh Ghanavati</Text>
          <Text style={styles.aboutUser}>Im somayeh Ghanavati </Text>
          <View style={styles.userBtnWrapper}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Text style={styles.userBtnTxt}>ویرایش</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userBtn}>
              <Text style={styles.userBtnTxt}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialIcons name="map" color="#777777" size={20}></MaterialIcons>
            <Text style={{color: '#777777', marginLeft: 20}}>Ahvaz,Iran</Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons
              name="phone"
              color="#777777"
              size={20}></MaterialIcons>
            <Text style={{color: '#777777', marginLeft: 20}}>
              +98-9333818137
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons
              name="email"
              color="#777777"
              size={20}></MaterialIcons>
            <Text style={{color: '#777777', marginLeft: 20}}>
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
                  color="#FF6347"
                  size={25}></MaterialCommunityIcons>
                <Text style={styles.menuItemText}>Your Favorites</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="credit-card"
                  color="#FF6347"
                  size={25}></MaterialCommunityIcons>
                <Text style={styles.menuItemText}>Payment</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  color="#FF6347"
                  size={25}></MaterialCommunityIcons>
                <Text style={styles.menuItemText}>Tell Your Friends</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="account-check-outline"
                  color="#FF6347"
                  size={25}></MaterialCommunityIcons>
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
