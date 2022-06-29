import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {styles} from './../assets/style/EditProfileScreenStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useTheme} from 'react-native-paper';

const CustomInput = ({name, control, rules, placeholder, error, icon}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.action}>
      <SimpleLineIcons name={icon} color={colors.iconColor} size={20} />
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.text}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {error && <Text style={{color: 'red'}}>{error.message}</Text>}
    </View>
  );
};
export default CustomInput;
