import {Box, Center, CheckIcon, Select} from 'native-base';
import React from 'react';
import {Button, Text, View} from 'react-native';
export const SearchScreen = ({navigation}: any) => {
  let [service, setService] = React.useState('');

  return (
    <Center>
      <Box w="3/4" maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="انتخاب کنید"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="داروهای شیمیایی" value="1" />
          <Select.Item label="عرقیات" value="2" />
          <Select.Item label="میوه" value="3" />
        </Select>
      </Box>
    </Center>
  );
};
