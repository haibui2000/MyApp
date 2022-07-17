import * as React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
import { TouchableOpacity, View, Text, Dimensions } from 'react-native';
import itemStyle from '../screens/Item/item.style';
import resize from './controll/resizeText';

const rsWidth = Dimensions.get('window').width
const rsHeight = Dimensions.get('window').height

const MyLoader = (props: any) => (
  <ContentLoader
    speed={1}
    style={{ ...itemStyle.viewList, marginTop: 10, justifyContent: 'center', alignItems: 'center',padding: 0 }}
    {...props}
  >
    <View style={{ padding: 8 }}>
      <View style={{
        ...itemStyle.imgList,
        backgroundColor: 'rgba(118, 138, 138, 0.1)',
        width: (rsWidth - 62) / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ fontSize: resize(30), color: 'rgba(118, 138, 138, 0.1)' }}>IMG</Text>

      </View>
      <View style={itemStyle.viewInfor}>
        <View style={{
          marginBottom: 5,
          height: 10,
          backgroundColor: 'rgba(118, 138, 138, 0.1)',
        }} />
        <View style={{
          marginBottom: 5,
          height: 10,
          width: rsWidth / 6,
          backgroundColor: 'rgba(118, 138, 138, 0.1)',
        }} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
        }}>
          <View style={{
            height: 10,
            width: rsWidth / 5,
            backgroundColor: 'rgba(118, 138, 138, 0.1)',
          }} />
          <View style={{
            height: 10,
            width: rsWidth / 5,
            backgroundColor: 'rgba(118, 138, 138, 0.1)',
          }} />
        </View>
      </View>
    </View>
  </ContentLoader>
)
export default MyLoader;