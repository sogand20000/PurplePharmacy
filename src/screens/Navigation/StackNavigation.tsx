import React from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
const Stack = createNativeStackNavigator();

const StackNavigation = ({navigation}: any) => {
  return (
    <View>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: 'black',
        }}>
        <Stack.Screen
          name="HomeScreen"
          options={{
            title: 'گروه بندی داروها',
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="DrugcategoryScreen"
          options={{
            title: 'گروه بندی داروها',
            headerStyle: {backgroundColor: 'red'},
          }}
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

export default StackNavigation;
