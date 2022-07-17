import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, ImageBackground, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList, PropsData } from '../../types';
import itemStyle from './item.style';
const ItemList = ({ item }: { item: PropsData }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [checkKeyboard, setCheckKeyboard] = React.useState<boolean>(false);
    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setCheckKeyboard(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setCheckKeyboard(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <>
            <TouchableOpacity
                style={{ marginTop: 10 }}
                activeOpacity={1}
                disabled={item.hide || checkKeyboard ? true : false}
                onPress={() => navigation.navigate('DetailProd', { item: item })}>
                <ImageBackground source={{ uri: item.backImg }}
                    style={itemStyle.viewList}
                    imageStyle={itemStyle.backImg}>

                    {item.hide ?
                        <View
                            style={itemStyle.viewSoldOut}
                        >
                            <View style={itemStyle.viewTextSoldOut}>
                                <Text style={itemStyle.txtSoldOut}>TẠM HẾT</Text>
                            </View>
                        </View>
                        :
                        <Image
                            key={item.id}
                            resizeMode='cover'
                            style={itemStyle.imgList}
                            source={{ uri: item.img }}
                        ></Image>}
                    {item.sale ? <View style={itemStyle.hotView}>
                        <View style={itemStyle.textHotView}>
                            <Text style={itemStyle.textHot}>SALE</Text>
                        </View>
                        <View style={{ ...itemStyle.triangle }} />
                    </View> : null}
                    <View style={itemStyle.viewInfor}>
                        <Text numberOfLines={2} style={itemStyle.name}>{item.name}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end'
                        }}>
                            {item.sale ?
                                <Text style={itemStyle.text}>₫{item.priceSale}</Text>
                                :
                                <Text style={itemStyle.text}>₫{item.price}</Text>}
                        </View>
                        <View style={{
                            justifyContent: 'space-between',
                            alignItems: 'flex-end'
                        }}>
                            <Text>Đã bán: {item.sold}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </>
    );
}


export default ItemList;