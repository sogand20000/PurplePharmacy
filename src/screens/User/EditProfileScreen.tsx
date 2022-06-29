import React from 'react';
import {View} from 'react-native';
import {styles} from './../../assets/style/EditProfileScreenStyle';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import CustomInput from './../../components/CustomInput';
import {CustomBottomSheet} from '../../components/CustomBottomSheet';

export const EditProfileScreen = props => {
  ///Validatin
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      Phone: '',
      Email: '',
    },
  });
  const onSubmit = data => console.log(data);
  ///
  return (
    <View style={styles.container}>
      <CustomBottomSheet></CustomBottomSheet>
      <CustomInput
        control={control}
        error={errors.firstName}
        name={'firstName'}
        placeholder={'نام'}
        rules={{
          required: 'نام را وارد کنید',
          maxLength: {value: 100, message: 'حداکثر 100 کاراکتر وارد کنید'},
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'فرمت وارد شده صحیح نیست',
          },
        }}
        icon={'user'}></CustomInput>
      <CustomInput
        control={control}
        error={errors.lastName}
        name={'lastName'}
        placeholder={'نام خانوادگی'}
        rules={{
          required: 'نام خانوادگی را وارد کنید',
          maxLength: {value: 100, message: 'حداکثر 100 کاراکتر وارد کنید'},
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'فرمت وارد شده صحیح نیست',
          },
        }}
        icon={'user'}></CustomInput>
      <CustomInput
        control={control}
        error={errors.Phone}
        name={'Phone'}
        placeholder={'تلفن'}
        rules={{
          required: 'َشماره همراه خود را وارد کنید',
          maxLength: {value: 10, message: 'حداکثر 10 عدد وارد کنید'},
          pattern: {
            value: /^[0-9+-]+$/,
            message: 'فرمت وارد شده را صحیح نیست',
          },
        }}
        icon={'phone'}></CustomInput>
      <CustomInput
        control={control}
        error={errors.Email}
        name={'Email'}
        placeholder={'ایمیل'}
        rules={{
          required: 'ایمیل خود را وارد کنید',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'فرمت وارد شده اشتباه است',
          },
        }}
        icon={'envelope'}></CustomInput>
      <CustomButton label={'ذخیره'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
