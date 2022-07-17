import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import createStyle from './create.style'
import resize from '../../components/controll/resizeText';




const ImagePickerScreen = ({ setImage }: { setImage: Function }) => {
  const openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    !pickerResult.cancelled ? setImage(pickerResult.uri) : null
  }

  return <TouchableOpacity
    activeOpacity={1}
    style={createStyle.btnPicker}
    onPress={openImagePickerAsync}
  >
    <EvilIcons name="camera" size={resize(100)} color="rgb(180, 180, 180)" />
  </TouchableOpacity>
}
export default React.memo(ImagePickerScreen)