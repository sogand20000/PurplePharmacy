import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import {styles} from './../../assets/style/EditProfileScreenStyle';

export const EditProfileScreen = props => {
  const [image, setImage] = useState({
    uri: require('./../../assets/images/Ghanavati_Profile.jpg'),
  });
  const {colors} = useTheme();
  const bs = React.createRef();
  const fall = new Animated.Value(5);
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      const url1 = './../../assets/images/Ghanavati_Profile.jpg';
      const url = {
        uri: require(url1),
      };
      console.log(url.uri);
      bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      // setImage(url);
      bs.current.snapTo(1);
    });
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>آپلود عکس</Text>
        <Text style={styles.panelSubtitle}>انتخاب عکس پروفایل</Text>
      </View>
      <TouchableOpacity
        style={[styles.panelButton, {backgroundColor: colors.buttonColor}]}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>دوربین</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.panelButton, {backgroundColor: colors.buttonColor}]}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>انتخاب از گالری</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.panelButton, {backgroundColor: colors.buttonColor}]}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>برگشت</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[350, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={image.uri}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={[
              {marginTop: 10, fontSize: 18, fontWeight: 'bold'},
              {color: colors.text},
            ]}>
            سمیه قنواتی
          </Text>
        </View>

        <View style={styles.action}>
          <SimpleLineIcons name="user" color={colors.iconColor} size={20} />
          <TextInput
            placeholder="نام"
            placeholderTextColor={colors.placeholderTextColor}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <SimpleLineIcons name="user" color={colors.iconColor} size={20} />
          <TextInput
            placeholder="نام خانوادگی"
            placeholderTextColor={colors.placeholderTextColor}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="phone"
            color={colors.iconColor}
            size={20}
          />
          <TextInput
            placeholder="تلفن"
            placeholderTextColor={colors.placeholderTextColor}
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <SimpleLineIcons name="envelope" color={colors.iconColor} size={20} />
          <TextInput
            placeholder="ایمیل"
            placeholderTextColor={colors.placeholderTextColor}
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <SimpleLineIcons name="globe" color={colors.iconColor} size={20} />
          <TextInput
            placeholder="کشور"
            placeholderTextColor={colors.placeholderTextColor}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color={colors.iconColor}
            size={20}
          />
          <TextInput
            placeholder="شهر"
            placeholderTextColor={colors.placeholderTextColor}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity
          style={[styles.commandButton, {backgroundColor: colors.buttonColor}]}
          onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>ذخیره</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
