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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';

import InputField from '../../components/InputFiled';
import {styles} from './../../assets/style/LoginScreenStyle';

export const LoginScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center', paddingBottom: 30}}>
          <Image
            source={require('./../../assets/images/login.png')}
            style={{
              height: 210,
              width: 220,
              transform: [{rotate: '-5deg'}],
            }}
          />
        </View>
        <InputField
          lable={'ایمیل'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={30}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          inputType={''}
          fieldButtonLabel={''}
          fieldButtonFunction={() => {}}
        />

        <InputField
          lable={'رمز ورود'}
          icon={
            <MaterialCommunityIcons
              name="key-variant"
              size={30}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType={''}
          fieldButtonLabel={'فراموش کرده اید؟'}
          fieldButtonFunction={() => {}}
          keyboardType={'email-address'}
        />

        <CustomButton
          label={'ورود'}
          onPress={() => {
            alert('خوش امدید');
          }}
        />
      </ScrollView>
      <View style={styles.socialContener}>
        <TouchableOpacity style={styles.social}>
          <MaterialCommunityIcons
            name="facebook"
            size={60}
            color="#54BAB9"></MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.social}>
          <MaterialCommunityIcons
            name="google"
            size={60}
            color="#54BAB9"></MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.social}>
          <MaterialCommunityIcons
            name="twitter"
            size={60}
            color="#54BAB9"></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}>
        <Text>ثبت نام نکرده اید؟</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{color: '#AD40AF', fontWeight: '700'}}>ثبت نام</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
