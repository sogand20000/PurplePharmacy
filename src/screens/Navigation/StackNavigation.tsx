import React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {
  HomeScreen,
  AboutUsScreen,
  DrugcategoryScreen,
  DrugListScreen,
  DrugDetailScreen,
  AraghijatListScreen,
  AraghijatDetailScreen,
  SearchScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  EditProfileScreen,
} from './../../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import DrawerContent from './DrawerContent';
import {NavigationContainer, Theme} from '@react-navigation/native';
const MyTheme = {
  dark: false,
  colors: {
    // primary: 'rgb(255, 45, 85)',
    //, 85)',

    card: '#9254C8',
    text: 'rgb(28, 28, 30)',
    //border: 'rgb(199, 199, 204)',
    //notification: 'rgb(255, 69, 58)',
  },
};
export const StackNavigation = ({navigation}: any) => {
  function MyDrawer() {
    return (
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props}></DrawerContent>}>
          <Drawer.Screen name="خانه" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <View>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="پزشک بنفش" component={MyDrawer} />
        <Stack.Screen
          name="HomeScreen"
          options={{title: 'گروه بندی داروها'}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="DrugcategoryScreen"
          options={{title: 'گروه بندی داروها'}}
          component={DrugcategoryScreen}
        />
        <Stack.Screen
          name="DrugList"
          options={{title: 'داروها'}}
          component={DrugListScreen}
        />
        <Stack.Screen
          name="DrugDetail"
          options={{title: 'جزییات'}}
          component={DrugDetailScreen}
        />
        <Stack.Screen
          name="AraghijatList"
          options={{title: 'عرقیجات'}}
          component={AraghijatListScreen}
        />
        <Stack.Screen
          name="AraghijatDetail"
          options={{title: 'عرقیجات'}}
          component={AraghijatDetailScreen}
        />
        <Stack.Screen
          name="Login"
          options={{title: 'ورود'}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{title: 'ثبت نام'}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="AboutUs"
          options={{title: 'درباره ما'}}
          component={AboutUsScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{title: 'پروفایل'}}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="EditProfile"
          options={{title: 'ویرایش پروفایل'}}
          component={EditProfileScreen}
        />
      </Stack.Navigator>
    </View>
  );
};
