import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputFiled';

export const RegisterScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center', paddingBottom: 30}}>
          <Image
            source={require('./../../assets/images/Register.png')}
            style={{
              marginTop: 20,
              height: 320,
              width: 500,
            }}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          عضویت
        </Text>
        <View style={styles.socialContener}>
          <TouchableOpacity style={styles.social}>
            <Image
              source={require('./../../assets/images/logo-facebookpng-32202.png')}
              style={{
                height: 60,
                width: 60,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Image
              source={require('./../../assets/images/google-logo-history-png-2598.png')}
              style={{
                height: 60,
                width: 60,
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Image
              source={require('./../../assets/images/logo-twitter-png-5859.png')}
              style={{
                height: 60,
                width: 60,
              }}></Image>
          </TouchableOpacity>
        </View>
        <InputField
          lable={'نام و نام خوانوادگی'}
          icon={
            <Ionicons
              name="person"
              size={20}
              color="#666"
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
              color="#666"
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
              color="#666"
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
              color="#666"
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
          <Text>ثبت نام کرده ام ؟</Text>
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

const styles = StyleSheet.create({
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
});
