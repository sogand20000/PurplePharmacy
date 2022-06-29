import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import {styles} from '../assets/style/EditProfileScreenStyle';
import ImagePicker from 'react-native-image-crop-picker';
import {useTheme} from 'react-native-paper';
import Profile from './../assets/images/user.png';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const imageUri = Image.resolveAssetSource(Profile).uri;

export const CustomBottomSheet = ({}: any) => {
  const {colors} = useTheme();
  const [image, setImage] = useState(imageUri);
  const bs = React.createRef();
  const fall = new Animated.Value(5);
  ///
  function takePhotoFromCamera() {
    return ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        setImage(image.path);
        //  bs.current.snapTo(1);
      })
      .catch(e => {
        console.log(e);
      });
  }
  function choosePhotoFromLibrary() {
    return ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        setImage(image.path);
        // bs.current.snapTo(1);
      })
      .catch(e => {
        console.log(e);
      });
  }
  function renderInner() {
    return (
      <View style={[styles.panel, {backgroundColor: colors.background}]}>
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.panelTitle, {color: colors.text}]}>
            آپلود عکس
          </Text>
          <Text style={[styles.panelSubtitle, {color: colors.text}]}>
            انتخاب عکس پروفایل
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.panelButton, {backgroundColor: colors.buttonColor}]}
          onPress={takePhotoFromCamera}>
          <Text style={[styles.panelButtonTitle, {color: colors.text}]}>
            دوربین
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.panelButton, {backgroundColor: colors.buttonColor}]}
          onPress={choosePhotoFromLibrary}>
          <Text style={[styles.panelButtonTitle, {color: colors.text}]}>
            انتخاب از گالری
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.panelButton, {backgroundColor: colors.buttonColor}]}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={[styles.panelButtonTitle, {color: colors.text}]}>
            برگشت
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View style={[styles.header, {backgroundColor: colors.background}]}>
        <View
          style={[styles.panelHeader, {backgroundColor: colors.background}]}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  }

  ///
  return (
    <>
      <BottomSheet
        ref={bs}
        snapPoints={[350, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <View
        style={{
          margin: 20,
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
                source={{
                  uri: image,
                }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: colors.grey,
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <MaterialCommunityIcons
                    name="camera"
                    size={35}
                    color={colors.iconColor}
                    style={{
                      opacity: 0.8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
