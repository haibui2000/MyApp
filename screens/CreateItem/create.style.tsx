import { StyleSheet } from 'react-native'
import resize from '../../components/controll/resizeText';
import layouts from '../../constants/Layout';
import colors from '../../constants/Colors';

const paddingHor = 10;

export default StyleSheet.create({
    container: {
        paddingHorizontal: paddingHor,
        paddingTop: 10,
        backgroundColor: 'white',
        width: layouts.window.width
    },
    viewClickImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewImg: {
        height: layouts.window.height / 2.5,
        width: layouts.window.width / 2,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(180, 180, 180)',
    },
    demoImg: {
        height: layouts.window.height / 2.5,
        width: layouts.window.width / 2,
        borderWidth: 2,
        borderRadius: 10,
    },
    viewInfor: {
        marginTop: 10,
        paddingBottom: 15
    },
    txt: {
        fontSize: resize(15),
        marginTop: 10
    },
    inputName: {
        borderWidth: 1,
        height: 40,
        marginTop: 5,
        width: layouts.window.width - 20,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: 'rgb(180, 180, 180)'
    },
    inputPrice:{
        width: layouts.window.width/3
    },
    regexStyle: {
        color: 'red',
        paddingLeft: 10,
        marginTop: 3
    }
    ,
    /**ImagePicker */
    btnPicker: {
        height: layouts.window.height / 5,
        width: layouts.window.width / 3,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(180, 180, 180)',
    },

});