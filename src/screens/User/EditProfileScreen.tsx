import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  shadow,
  TextInput,
  useTheme,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const EditProfileScreen = ({navigation}: any) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}
                source={require('./../../assets/images/Ghanavati_Profile.jpg')}>
                <View>
                  <MaterialCommunityIcons
                    name="camera"
                    size={35}
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#ffff',
                      borderRadius: 10,
                    }}></MaterialCommunityIcons>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Somayeh Ghanavati
          </Text>
        </View>
        <View style={styles.action}>
          <MaterialIcons
            color={colors.text}
            name="person-outline"
            size={20}></MaterialIcons>
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="نام"
            placeholderTextColor="#666666"
            autoCorrect={false}></TextInput>
        </View>
        <View style={styles.action}>
          <MaterialIcons
            color={colors.text}
            name="person-outline"
            size={20}></MaterialIcons>
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="نام خانوادگی"
            placeholderTextColor="#666666"
            autoCorrect={false}></TextInput>
        </View>
        <View style={styles.action}>
          <MaterialIcons
            color={colors.text}
            name="local-phone"
            size={20}></MaterialIcons>
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="شماره تماس"
            placeholderTextColor="#666666"
            autoCorrect={false}></TextInput>
        </View>
        <View style={styles.action}>
          <MaterialIcons
            color={colors.text}
            name="email"
            size={20}></MaterialIcons>
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="ایمیل"
            placeholderTextColor="#666666"
            autoCorrect={false}></TextInput>
        </View>
        <View style={styles.action}>
          <Ionicon color={colors.text} name="globe" size={20}></Ionicon>
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="کشور"
            placeholderTextColor="#666666"
            autoCorrect={false}></TextInput>
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            color={colors.text}
            name="map-marker-outline"
            size={20}></MaterialCommunityIcons>
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="شهر"
            placeholderTextColor="#666666"
            autoCorrect={false}></TextInput>
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}> ذخیره</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFFF',
    paddingTop: 20,
  },
  Header: {
    backgroundColor: '#FFFFFFF',
    shadowColor: '#3333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0000040',
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

export default EditProfileScreen;
