import { StyleSheet } from 'react-native'
import resize from '../../components/controll/resizeText';
import Layout from  '../../constants/Layout';
export default StyleSheet.create({
    container: {
        minHeight: Layout.window.height,
    },
    virturList: {
        height: Layout.window.height,
    },
    viewNoData:{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    imgNoData: {
        width: Layout.window.width /2,
        height: Layout.window.height/5
    },
    txtNoData:{
        fontSize: resize(13)
    }
});