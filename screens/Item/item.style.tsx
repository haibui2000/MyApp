import { StyleSheet } from 'react-native'
import resize from '../../components/controll/resizeText';
import layouts from '../../constants/Layout';

export default StyleSheet.create({
    viewList: {
        marginLeft: 10,
        width: (layouts.window.width - 30) / 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 5,
    },
    backImg: {
        opacity: 0.4
    },
    imgList: {
        height: layouts.window.height / 3.5,
        borderRadius: 5
    },
    viewSoldOut: {
        height: layouts.window.height / 3.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTextSoldOut: {
        backgroundColor: 'rgba(118, 138, 138, 0.1)',
        height: layouts.window.width / 2.8,
        width: layouts.window.width / 2.8,
        borderRadius: (layouts.window.width / 2.8) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtSoldOut: {
        fontSize: resize(24),
        color: 'red',
        textShadowColor: 'red',
        textShadowOffset: {
            width: 1,
            height: 1
        }
    },
    viewInfor: {
        height: layouts.window.height / 9,
        marginTop: 5,
    },
    name: {
        marginBottom: 10,
        height: layouts.window.height / 17,
        fontSize: resize(15),

    },
    text: {
        fontSize: resize(14),
        color: 'red'
    },
    /** Best Seller */
    hotView: {
        position: 'absolute',
    },
    textHotView: {
        backgroundColor: '#FA381B',
        padding: 2,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    textHot: {
        color: 'white',
        fontSize: resize(13),
        textTransform: 'uppercase',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 10,
        borderLeftWidth: 10,
        borderBottomWidth: 0,
        borderTopColor: '#912110',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    paragraph: {
        position: 'absolute',
        fontSize: resize(130),
        left: 10,
        bottom: 0,
        color: '#FFF',
        textShadowColor: 'black',
        textShadowRadius: 1,
        textShadowOffset: {
            width: 2,
            height: 2
        }
    },
});