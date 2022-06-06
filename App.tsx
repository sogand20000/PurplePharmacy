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
} from './screens';
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
import {Alert} from './components/alert';

const Tab = createBottomTabNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="خانه" component={HomeScreen} />
      <Stack.Screen
        name="AboutUsScreen"
        options={{title: 'درباره ما'}}
        component={AboutUsScreen}
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
    </Stack.Navigator>
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
            return <Alert text="اشکالcc در شبکه" type="errdor"></Alert>;
          },
        });
      }
    });
  });

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator>
          <Drawer.Screen name="جستجو" component={SearchScreen} />

          <Drawer.Screen name="stack" component={MyStack} />
          <Drawer.Screen name="Feed" component={HomeScreen} />
          <Drawer.Screen name="Article" component={AraghijatListScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
