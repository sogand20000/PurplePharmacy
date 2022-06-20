import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Icon} from 'native-base';
import React, {useState} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';
import {
  Drawer,
  Text,
  Avatar,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
  Title,
  useTheme,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from './../../components/context';
import {styles} from '../../assets/style/DrawerContentStyle';

export default function DrawerContent(props) {
  const {signOut, toggleTheme} = React.useContext(AuthContext);

  const paperTheme = useTheme();
  const MyTheme = () => {
    const isDark = paperTheme.dark;
    return <Switch value={isDark} onValueChange={toggleTheme} />;
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('./../../assets/images/Ghanavati_Profile.jpg')}
                size={70}></Avatar.Image>
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Somayeh Ghanavati</Title>
                <Caption style={styles.caption}>User</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}></MaterialCommunityIcons>
              )}
              label="خانه"
              onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}></MaterialCommunityIcons>
              )}
              label="پروفایل"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}></MaterialCommunityIcons>
              )}
              label="ورود"
              onPress={() => {
                props.navigation.navigate('Login');
              }}></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}></MaterialCommunityIcons>
              )}
              label="ثبت نام"
              onPress={() => {
                props.navigation.navigate('Register');
              }}></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}></MaterialCommunityIcons>
              )}
              label="درباره ما"
              onPress={() => {
                props.navigation.navigate('AboutUs');
              }}></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}></MaterialCommunityIcons>
              )}
              label="جستجو"
              onPress={() => {
                props.navigation.navigate('Search');
              }}></DrawerItem>
          </Drawer.Section>
          <Drawer.Section>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <MaterialCommunityIcons
                  name="moon-waning-crescent"
                  size={30}
                  color={'black'}></MaterialCommunityIcons>
                <View>
                  <MyTheme></MyTheme>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottonDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}></MaterialCommunityIcons>
          )}
          label="sing out"
          onPress={() => {
            BackHandler.exitApp();
          }}></DrawerItem>
      </Drawer.Section>
    </View>
  );
}
