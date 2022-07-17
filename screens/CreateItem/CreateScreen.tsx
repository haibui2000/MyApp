import * as React from 'react';
import { Text, View, Image, ImageSourcePropType, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../Header/Header';
import createStyle from './create.style'
import Dropdown from './Dropdown';
import ImagePicker from './ImagePicker'

const CreateScreen = () => {
  const [image, setImage] = React.useState("")
  const [nameSP, setNameSP] = React.useState<string>(" ")
  const [price, setPrice] = React.useState<number>(0)
  const [selectedLanguage, setSelectedLanguage] = React.useState("")

  let regName: RegExp = /^[^@&+]*$/;
  const _onChangeNameSP = (value: string) => {
    setNameSP(value)
  }
  const _onChangePrice = (value: string) => {
    value.length != 0 ? setPrice(parseInt(value)) : setPrice(0)
  }

  return (
    <>

      <Header name="Tạo sản phẩm mới" children={undefined} />
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        enabled
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={createStyle.container}>
            <View style={createStyle.viewClickImage}>
              <View>
                <ImagePicker setImage={setImage} />
              </View>
              {image ?
                <Image
                  resizeMode='cover'
                  style={createStyle.demoImg}
                  source={{ uri: image }}
                ></Image> :
                <View style={createStyle.viewImg}>
                  <Text>Không có hình ảnh</Text>
                </View>
              }
            </View>
            <View style={createStyle.viewInfor}>
              <Text style={createStyle.txt}>Tên sản phẩm</Text>
              <TextInput
                style={createStyle.inputName}
                onChangeText={_onChangeNameSP}
                keyboardType='default'
                placeholder='Vui lòng nhập tên sản phẩm ...'
                placeholderTextColor='gray'
              />
              {!nameSP.length || !regName.test(nameSP) ?
                <Text style={createStyle.regexStyle}>
                  {
                    !nameSP.length ? "Vui lòng không để trống!" : "Không chứa ký tự đặc biệt."
                  }
                </Text> :
                null}
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={createStyle.txt}>Giá bán</Text>
                  <TextInput
                    style={{ ...createStyle.inputName, ...createStyle.inputPrice }}
                    onChangeText={_onChangePrice}
                    keyboardType='numeric'
                    maxLength={6}
                    defaultValue='0'
                    value={price.toString()}
                    placeholderTextColor='gray'
                  />
                </View>
                <View>
                  <Dropdown />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
export default React.memo(CreateScreen);