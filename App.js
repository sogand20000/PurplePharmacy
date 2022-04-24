import React from 'react';
import {NavigationContainer,Theme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen,AboutUsScreen,DrugcategoryScreen,DrugListScreen,DrugDetailScreen,AraghijatListScreen,AraghijatDetailScreen} from './screens';

import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { color } from 'native-base/lib/typescript/theme/styled-system';

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


 const App =()=>{
  return(
    <NativeBaseProvider>

   
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="خانه" component={HomeScreen} />
    <Stack.Screen name="درباره ما" options={{title:'درباره ما'}} component={AboutUsScreen} />
    <Stack.Screen name="DrugcategoryScreen" options={{title:'گروه بندی داروها'}} component={DrugcategoryScreen} />
    <Stack.Screen name="DrugList" options={{title:'داروها'}}component={DrugListScreen} />
    <Stack.Screen name="DrugDetail" options={{title:'جزییات'}}component={DrugDetailScreen} />
    <Stack.Screen name="AraghijatList" options={{title:'عرقیجات'}}component={AraghijatListScreen} />
    <Stack.Screen name="AraghijatDetail" options={{title:'عرقیجات'}}component={AraghijatDetailScreen} />

   </Stack.Navigator> 

    {/*    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="AboutUs" component={AboutUsScreen} />
    </Tab.Navigator>  */}

    </NavigationContainer>
    </NativeBaseProvider>
  )
 }
export default App;
