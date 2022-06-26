import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Drawer,
  Text,
  Avatar,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
  Title,
  useTheme,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from './../../components/context';
import {styles} from '../../assets/style/DrawerContentStyle';
import colors from 'native-base/lib/typescript/theme/base/colors';
import Profile from '../../assets/images/user.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const imageUri = Image.resolveAssetSource(Profile).uri;
export default function DrawerContent(props) {
  const {signOut, toggleTheme} = React.useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState(imageUri);
  const {colors} = useTheme();
  const MyTheme = () => {
    const isDark = colors.dark;
    return <Switch value={isDark} onValueChange={toggleTheme} />;
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfSection}>
            <View style={{flexDirection: 'row', marginTop: 18}}>
              <Avatar.Image
                source={{uri: imageUrl}}
                style={{backgroundColor: colors.grey}}
                size={(wp('10%'), hp('10%'))}></Avatar.Image>
              <View style={{marginLeft: 18, flexDirection: 'column'}}>
                <Title style={[styles.title, {color: colors.text}]}>
                  نام ونام خانوادگی
                </Title>

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('EditProfile');
                  }}>
                  <Text>ویرایش</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="home"
                  color={colors.iconColor}
                  size={(wp('5%'), hp('3%'))}></MaterialCommunityIcons>
              )}
              label={() => (
                <Text
                  style={[
                    {fontSize: (wp('2%'), hp('2%'))},
                    {color: colors.text},
                  ]}>
                  خانه
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}></DrawerItem>

            <DrawerItem
              icon={({color, size}) => (
                <MaterialIcons
                  name="input"
                  color={colors.iconColor}
                  size={(wp('5%'), hp('3%'))}></MaterialIcons>
              )}
              label={() => (
                <Text
                  style={[
                    {fontSize: (wp('2%'), hp('2%'))},
                    {color: colors.text},
                  ]}>
                  ورود
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('Login');
              }}></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialIcons
                  name="app-registration"
                  color={colors.iconColor}
                  size={(wp('5%'), hp('3%'))}></MaterialIcons>
              )}
              label={() => (
                <Text
                  style={[
                    {fontSize: (wp('2%'), hp('2%'))},
                    {color: colors.text},
                  ]}>
                  ثبت نام
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('Register');
              }}></DrawerItem>
            {/*  <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={colors.iconColor}
                  size={(wp('5%'), hp('3%'))}></MaterialCommunityIcons>
              )}
              label={() => (
                <Text
                  style={[
                    {fontSize: (wp('2%'), hp('2%'))},
                    {color: colors.text},
                  ]}>
                  درباره ما
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('AboutUs');
              }}></DrawerItem> */}
            {/*  <DrawerItem
              icon={({color, size}) => (
                <MaterialIcons
                  name="search"
                  color={colors.iconColor}
                  size={(wp('5%'), hp('3%'))}></MaterialIcons>
              )}
              label={() => (
                <Text
                  style={[
                    {fontSize: (wp('2%'), hp('2%'))},
                    {color: colors.text},
                  ]}>
                  جستجو
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('Search');
              }}></DrawerItem> */}
          </Drawer.Section>
          <Drawer.Section>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <MaterialCommunityIcons
                  name="moon-waning-crescent"
                  size={(wp('5%'), hp('3%'))}
                  color={colors.iconColor}></MaterialCommunityIcons>
                <View>
                  <MyTheme></MyTheme>
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
              color={colors.iconColor}
              size={(wp('5%'), hp('3%'))}></MaterialCommunityIcons>
          )}
          label={() => (
            <Text
              style={[{fontSize: (wp('2%'), hp('2%'))}, {color: colors.text}]}>
              خروج
            </Text>
          )}
          onPress={() => {
            BackHandler.exitApp();
          }}></DrawerItem>
      </Drawer.Section>
    </View>
  );
}
