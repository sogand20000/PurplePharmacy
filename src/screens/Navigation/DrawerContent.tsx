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
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
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
            <TouchableRipple>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme}></Switch>
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
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {fontSize: 14, lineHeight: 14},
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottonDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
