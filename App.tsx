import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
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
} from './src/screens';
import {NativeBaseProvider, useToast} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {color} from 'native-base/lib/typescript/theme/styled-system';
const Stack = createNativeStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NetInfo from '@react-native-community/netinfo';
import {Alert} from './src/components/alert';

const Tab = createBottomTabNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="خانه" component={HomeScreen} />
      <Drawer.Screen name="ورود" component={LoginScreen} />
      <Drawer.Screen name="ثبت نام" component={RegisterScreen} />
      <Drawer.Screen name="درباره ما" component={AboutUsScreen} />
      <Drawer.Screen name="جستجو" component={SearchScreen} />
    </Drawer.Navigator>
  );
}
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

const App = () => {
  const toast = useToast();

  React.useEffect(() => {
    SplashScreen.hide();

    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      if (!state.isConnected) {
        console.log('Is connected?', state.isConnected);

        toast.show({
          render: () => {
            return <Alert text="اشکال در شبکه" type="errdor"></Alert>;
          },
        });
      }
    });
  });

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
