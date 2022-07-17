import { StyleSheet } from 'react-native'
import resize from '../../components/controll/resizeText';
import layouts from '../../constants/Layout';
import colors from '../../constants/Colors';

export default StyleSheet.create({

    container: {
        backgroundColor: 'red',
        flex: 1,
    },

    viewDetail: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 5,
    },
    textName: {
        alignItems: 'center',
        flex: 1,
        textAlign: 'center',
        paddingRight: 24,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20

    },
    text:{
        color: 'white',
        fontSize: resize(15),
        paddingLeft: 10,
    },
    
    /**SearchBar*/
    keyboardView: {
        backgroundColor: colors.appColor,
        height: layouts.window.height / 9,
        justifyContent: 'flex-end',
    },
    inputSearch: {
        position: 'absolute',
        backgroundColor: 'white',
        maxWidth: layouts.window.width,
        height: 40,
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 25
    },
    btnClear: {
        position: 'absolute',
        right: 15,
        bottom: 10,
        justifyContent: 'center',
        height: 40,
        width: 20
    }

});