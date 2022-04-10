import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {AboutUsScreen} from './screens/AboutUsscreen';
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
 const App =()=>{
  return(
    <NavigationContainer>
   {/*  <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AboutUs"
      options={{title:'درباره ما'}}
      component={AboutUsScreen} />

      </Stack.Navigator> */}

      <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="AboutUs" component={AboutUsScreen} />
    </Tab.Navigator>

    </NavigationContainer>
  )
 }
export default App;
