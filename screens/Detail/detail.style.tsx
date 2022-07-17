import { StyleSheet } from 'react-native'
import resize from '../../components/controll/resizeText';
import layouts from '../../constants/Layout';
const colorBack = '#F2F2F2'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        height: layouts.window.height,
        backgroundColor: colorBack,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2,

        elevation: 1,
    },
    imgView: {
        height: layouts.window.height/2.5
    },
    imgDetail: {
        width: layouts.window.width,
        height: layouts.window.height / 2.5
    },
    name: {
        fontWeight: 'bold',
        fontSize: resize(15),
    },
    inforView: {
        backgroundColor: 'white',
        padding: 10,
    },
    btnView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btn: {
        height: layouts.window.height / 11,
        width: layouts.window.width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: resize(15),
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    text: {
        fontSize: resize(16),
        color: 'red',
        marginVertical: 10
    },
    titleDetail:{

    },
    textDetail: {
    },
    sizeText: {
        fontSize: resize(14),
    }
    
});