import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen,AboutUsScreen,DrugcategoryScreen} from './screens';

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
 const App =()=>{
  return(
    <NativeBaseProvider>

   
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AboutUs"
      options={{title:'درباره ما'}}
      component={AboutUsScreen} />
   <Stack.Screen name="DrugcategoryScreen"
      options={{title:'گروهیندی داروها'}}
      component={DrugcategoryScreen} />
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
