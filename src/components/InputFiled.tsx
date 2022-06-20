import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {styles} from './../assets/style/EditProfileScreenStyle';

export default function InputFiled({
  lable,
  icon,
  keyboardType,
  inputType,
  Placeholder,
  fieldButtonLabel,
  fieldButtonLabelFunction,
}) {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={lable}
          keyboardType={keyboardType}
          secureTextEntry={true}
          placeholderTextColor={colors.placeholderTextColor}
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
        />
      ) : (
        <TextInput
          placeholder={lable}
          placeholderTextColor={colors.placeholderTextColor}
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
          keyboardType={keyboardType}
        />
      )}

      <TouchableOpacity onPress={fieldButtonLabelFunction}>
        <Text style={[{color: '#AD40AF', fontWeight: '700'}]}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
