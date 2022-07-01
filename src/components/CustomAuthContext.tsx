import React, {useState} from 'react';
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
const [isDarkTheme, setIsDarkTheme] = useState(false);

const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

const CustomAuthContext = ({}: any) => {
  return React.useMemo(
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
};
export {CustomAuthContext, theme};
