import {Dimensions, Platform, PixelRatio } from 'react-native';
const resize = (size: number) => {
    const newSize = size * (Dimensions.get('window').width / 320)
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 4
    }
}
export default resize;