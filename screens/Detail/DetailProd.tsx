import { useNavigation } from '@react-navigation/native';
import * as React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import resize from '../../components/controll/resizeText';
import Header from '../Header/Header'
import detailStyle from './detail.style';
import { PropsData } from '../../types';

interface Detail { title: string; weightMax: number; unit: string; nguyenLieu: string; origin: string; nsx: string; }
interface Props {
    route: any; id: number, img: string, arrImg: Array<string>, name: string, details: Detail, price: number, priceSale: number, sale: boolean, sold: number, hide: boolean
}
const DetailProd = (props: Props) => {
    const [imgActive, setImgActive] = React.useState<number>(0);
    const onchange = (nativeEvent: any) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide != imgActive) {
            setImgActive(slide);
        }
    }
    const { item } = props.route.params;
    const details = item?.details;
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <>
                <Header name={undefined} children={undefined}/>
                <ScrollView
                    style={detailStyle.scrollView}
                    scrollEventThrottle={0}
                >
                    <View style={detailStyle.container}>
                        <ScrollView
                            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={0}
                            horizontal
                            pagingEnabled
                            style={detailStyle.imgView}
                        >
                            {item.arrImg.map((e: string, i: number) =>
                                <Image key={'img    ' + i} resizeMode='cover' style={detailStyle.imgDetail} source={{ uri: e }} />
                            )}
                        </ScrollView>
                        <View style={detailStyle.inforView}>
                            <Text style={detailStyle.name}>{item.name}</Text>
                            {item.sale ?
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ ...detailStyle.text, textDecorationLine: 'line-through', color: '#949494', marginRight: 10 }}>₫{item.price}</Text>
                                    <Text style={{ ...detailStyle.text, fontSize: resize(18) }}>₫{item.priceSale}</Text>
                                </View>
                                :
                                <Text style={detailStyle.text}>₫{item.price}</Text>}
                            <Text>Đã bán: {item.sold}</Text>
                        </View>
                        <View style={detailStyle.inforView}>
                            <Text style={{ textAlign: 'justify', ...detailStyle.sizeText }}>{details.title}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <View>
                                    <Text style={{...detailStyle.titleDetail, ...detailStyle.sizeText}}>Mua tối đa: </Text>
                                    <Text style={{...detailStyle.titleDetail, ...detailStyle.sizeText}}>Nguyên liệu: </Text>
                                    <Text style={{...detailStyle.titleDetail, ...detailStyle.sizeText}}>Địa chỉ: </Text>
                                    <Text style={{...detailStyle.titleDetail, ...detailStyle.sizeText}}>Người trồng: </Text>
                                </View>
                               <View>
                               <View style={{ flexDirection: 'row'}}>
                                    <Text style={{...detailStyle.textDetail, ...detailStyle.sizeText}}>{details.weightMax}</Text>
                                    <Text style={{...detailStyle.textDetail, ...detailStyle.sizeText}}> {details.unit}</Text>
                                </View>
                                <Text style={{...detailStyle.textDetail, ...detailStyle.sizeText}}>{details.nguyenLieu}</Text>
                                <Text style={{...detailStyle.textDetail, ...detailStyle.sizeText}}>{details.origin}</Text>
                                <Text style={{...detailStyle.textDetail, ...detailStyle.sizeText}}>{details.nsx}</Text>
                               </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={detailStyle.btnView}>
                    <TouchableOpacity style={{ ...detailStyle.btn, backgroundColor: '#DB593B' }}><Text style={detailStyle.btnText}>Thêm giỏ hàng</Text></TouchableOpacity>
                    <TouchableOpacity style={{ ...detailStyle.btn, backgroundColor: '#00A7C4' }}><Text style={detailStyle.btnText}>Thanh toán</Text></TouchableOpacity>
                </View>
            </>
        </TouchableWithoutFeedback>
    )
}
export default DetailProd;