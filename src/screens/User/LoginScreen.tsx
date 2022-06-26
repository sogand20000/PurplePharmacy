import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputFiled';
import {SocialStyle} from '../../assets/style/SocialStyle';
import {useTheme} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SocialBox from './../../components/SocialBox';

export const LoginScreen = ({navigation}: any) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center', paddingBottom: 30}}>
          <Image
            source={require('./../../assets/images/login.png')}
            style={{
              marginTop: 30,
              height: hp('25%'),
              width: wp('45%'),
            }}
          />
        </View>
        <InputField
          lable={'ایمیل'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={colors.iconColor}
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
              size={20}
              color={colors.iconColor}
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
      <View style={SocialStyle.socialContener}>
        <SocialBox icon="facebook"></SocialBox>
        <SocialBox icon="google"></SocialBox>
        <SocialBox icon="twitter"></SocialBox>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}>
        <Text style={{color: colors.text}}>ثبت نام نکرده اید؟</Text>
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
