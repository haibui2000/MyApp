import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { RootStackParamList } from '../../types';
import itemStyle from './item.style';
const ItemListBestSeller = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { index, item } = props.props;

    return (
        <>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailProd', { item: item })}>
                <View style={itemStyle.viewList}>
                    <View>
                        <Image
                            key={item.id}
                            resizeMode='cover'
                            style={itemStyle.imgList}
                            source={{ uri: item.img }}
                        ></Image>
                        <Text style={itemStyle.paragraph}>{index + 1}</Text>
                    </View>
                    <View style={itemStyle.hotView}>
                        <View style={itemStyle.textHotView}>
                            <Text style={itemStyle.textHot}>HOT</Text>
                        </View>
                        <View style={{ ...itemStyle.triangle }} />
                    </View>
                    <View style={itemStyle.viewInfor}>
                        <Text numberOfLines={2} style={itemStyle.name}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            {item.sale ?
                                <Text style={itemStyle.text}>₫{item.priceSale}</Text>
                                :
                                <Text style={itemStyle.text}>₫{item.price}</Text>}
                            <Text>Đã bán: {item.sold}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}


export default ItemListBestSeller;