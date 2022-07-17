import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native'
import resize from '../../components/controll/resizeText';
import layouts from '../../constants/Layout';
import colors from '../../constants/Colors';

export default StyleSheet.create({

    container: {
        flex: 1,
    },
    wrap: {
        width: layouts.window.width,
        height: layouts.window.height / 3
    },
    title: {
        fontSize: resize(20),
    },
    viewText: {
        marginTop: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#B5B5B5',

    },
    virturList: {
        marginTop: 10,
        paddingBottom: 10,
    },
    scrollview: {
        backgroundColor: '#E8E8E8',
        marginBottom: layouts.window.height * .08 + 10
    },
    viewBtnIcon: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    btnTouch: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnIcon: {
        width: layouts.window.width * .15,
        height: layouts.window.width * .15,
        borderRadius: (layouts.window.width * .15) / 2,
    },
    btnText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: resize(13),
    }
});