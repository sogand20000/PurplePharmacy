import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

export default function InputFiled({
  lable,
  icon,
  keyboardType,
  inputType,
  Placeholder,
  fieldButtonLabel,
  fieldButtonLabelFunction,
}) {
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
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={lable}
          style={{flex: 1, paddingVertical: 0}}
          keyboardType={keyboardType}
        />
      )}

      <TouchableOpacity onPress={fieldButtonLabelFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
