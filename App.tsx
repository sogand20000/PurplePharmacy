import * as React from 'react';

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
  Counter,
} from './src/screens';
import {NativeBaseProvider, useToast} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NetInfo from '@react-native-community/netinfo';
import {Alert} from './src/components/alert';

const Tab = createBottomTabNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import DrawerContent from './src/screens/Navigation/DrawerContent';
import {AuthContext} from './src/components/context';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import colors from 'native-base/lib/typescript/theme/base/colors';
import {Provider} from 'react-redux';
import store from './src/components/app/store';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#af64b0',
      }}
      drawerContent={props => <DrawerContent {...props}></DrawerContent>}>
      <Drawer.Screen name="خانه" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      white: '#fff',
      black: '#000',
      blue: '#5D5FEE',
      grey: '#BABBC3',
      light: '#F3F4FB',
      darkBlue: '#7978B5',
      red: 'red',
      background: '#ffffff',
      text: '#333333',
      iconColor: '#af64b0',
      buttonColor: '#AD40AF',
      backgroundBox: '#af64b0',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      buttonColor: '#AD40AF',
      iconColor: '#af64b0',
      background: '#333333',
      placeholderTextColor: '#e8e6e6',
      text: '#ffffff',
      backgroundBox: '#454343',
    },
  };
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(
    () => ({
      /// signIn: async foundUser => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      /*  const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username; */
      /*  try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      } */
      // console.log('user token: ', userToken);
      /*  dispatch({type: 'LOGIN', id: userName, token: userToken}); */
      // },
      /*  signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },*/
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );

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
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <NativeBaseProvider>
            <NavigationContainer theme={theme}>
              <Stack.Navigator
                screenOptions={{
                  //  headerShown: false,
                  headerStyle: {
                    backgroundColor: theme.colors.backgroundBox,
                  },
                  headerTitleStyle: {
                    color: theme.colors.text,
                  },
                }}>
                <Stack.Screen
                  name="پزشک بنفش"
                  component={MyDrawer}
                  options={{headerShown: false}}
                />
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
                <Stack.Screen
                  name="Counter"
                  options={{title: 'Counter'}}
                  component={Counter}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>
        </AuthContext.Provider>
      </PaperProvider>
    </Provider>
  );
};
export default App;
