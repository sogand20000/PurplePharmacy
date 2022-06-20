import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputFiled';
import {useTheme} from 'react-native-paper';
import {SocialStyle} from '../../assets/style/SocialStyle';

export const RegisterScreen = ({navigation}: any) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('./../../assets/images/Register.png')}
            style={{
              marginTop: 30,
              height: 320,
              width: 500,
            }}
          />
        </View>

        <Text
          style={[
            {
              fontFamily: 'Roboto-Medium',
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            },
            {color: colors.text},
          ]}>
          عضویت
        </Text>
        <View style={SocialStyle.socialContener}>
          <TouchableOpacity
            style={[SocialStyle.social, {borderColor: colors.buttonColor}]}>
            <Image
              source={require('./../../assets/images/logo-facebookpng-32202.png')}
              style={{
                height: 60,
                width: 60,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[SocialStyle.social, {borderColor: colors.buttonColor}]}>
            <Image
              source={require('./../../assets/images/google-logo-history-png-2598.png')}
              style={{
                height: 60,
                width: 60,
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={[SocialStyle.social, {borderColor: colors.buttonColor}]}>
            <Image
              source={require('./../../assets/images/logo-twitter-png-5859.png')}
              style={{
                height: 60,
                width: 60,
              }}></Image>
          </TouchableOpacity>
        </View>
        <InputField
          lable={'نام'}
          icon={
            <Ionicons
              name="person"
              size={20}
              color={colors.iconColor}
              style={{marginRight: 5}}
            />
          }
          fieldButtonLabel={''}
          fieldButtonFunction={() => {}}
          inputType="string"
          keyboardType="default"
        />
        <InputField
          lable={'نام خانوادگی'}
          icon={
            <Ionicons
              name="person"
              size={20}
              color={colors.iconColor}
              style={{marginRight: 5}}
            />
          }
          fieldButtonLabel={''}
          fieldButtonFunction={() => {}}
          inputType="string"
          keyboardType="default"
        />
        <InputField
          lable={'ایمیل'}
          icon={
            <MaterialCommunityIcons
              name="email-plus-outline"
              size={20}
              color={colors.iconColor}
              style={{marginRight: 5}}
            />
          }
          fieldButtonLabel={''}
          fieldButtonFunction={() => {}}
          inputType="string"
          keyboardType="email-address"
        />
        <InputField
          lable={'رمز ورود'}
          icon={
            <MaterialCommunityIcons
              name="key-variant"
              size={20}
              color={colors.iconColor}
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          keyboardType="default"
          fieldButtonLabel={''}
          fieldButtonFunction={() => {}}
        />
        <InputField
          lable={'تکرار رمز ورود'}
          icon={
            <MaterialCommunityIcons
              name="key-variant"
              size={20}
              color={colors.iconColor}
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          keyboardType="default"
          fieldButtonLabel={''}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={'ثبت نام'}
          onPress={() => {
            alert('خوش امدید');
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: colors.text}}>ثبت نام کرده ام ؟</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>ورود</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* const styles = StyleSheet.create({
  social: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  socialContener: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
}); */
