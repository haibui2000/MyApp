import * as React from 'react';
import { Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import createStyle from './create.style'
import resize from '../../components/controll/resizeText';
import { PropsData } from '../../types';

interface Props { id: number; value: string }
const dataDrop: Array<Props> = [
    {
        id: 0,
        value: "Kg",
    },
    {
        id: 1,
        value: "Bịch",
    },
    {
        id: 2,
        value: "Cái",
    },
    {
        id: 3,
        value: "Quả",
    },
    {
        id: 4,
        value: "Bộ",
    },
    {
        id: 5,
        value: "Cặp",
    },
    {
        id: 6,
        value: "Gram",
    },

]

const Dropdown = () => {
    const renderItem = ({item, index}:{item:    Props, index:number}) => {
        return<TouchableOpacity>
            <Text>{item.value}</Text>
        </TouchableOpacity>
    }
    return <>
        <TouchableOpacity
            activeOpacity={0.9}
        >
        </TouchableOpacity>
    </>
}
export default React.memo(Dropdown)