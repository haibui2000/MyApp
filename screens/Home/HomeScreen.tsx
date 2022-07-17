import * as React from 'react';
import { Text, View, TouchableWithoutFeedback, Keyboard, Image, ScrollView, FlatList, ImageBackground, ImageSourcePropType } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import slide from '../../data/dataSlide';
import SearchBar from '../Header/SearchBar';
import ItemList from '../Item/ItemList';
import ItemListBestSeller from '../Item/ItemListBestSeller';
import homeStyle from './home.style';
import { PropsData, RootStackParamList } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { getSanPhams, getSanPhamsSold, seasonSanPhams } from "../../redux/actions/index"
import { dataSanPham$ } from '../../redux/selectors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const image = slide;
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data$, dataSold$, dataSeason$ } = useSelector(dataSanPham$);
  const [imgActive, setImgActive] = React.useState<number>(0);
  const [columnType, setColumnType] = React.useState<number>(0)
  const onchange = (nativeEvent: any) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide != imgActive) {
      setImgActive(slide);
    }
  }
  React.useEffect(() => {
    const _action = dispatch(getSanPhams.getSanPhamsRequest({ pagenumber: 0 }))
    const getDataSold = dispatch(getSanPhamsSold.getSanPhamsSoldRequest({ pagenumber: 0, perPage: 10 }))
    const getDataSeason = dispatch(seasonSanPhams.seasonSanPhamsRequest({ pagenumber: 0, perPage: 10 }))
    return () => {
      _action;
      getDataSold;
      getDataSeason;
    }
  }, [dispatch]);

  const _showMoreData = React.useCallback(() => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const moveToScreen = columnType==0?"sold":"seasons"
    const _moveToScreen = () => navigation.navigate("StoreScreen", {keyWord: moveToScreen, searchText: undefined})
    return <View style={{
      marginLeft: 10,
      width: 100,
      backgroundColor: 'white',
      padding: 5,
      borderRadius: 5,
      flex: 1,
      justifyContent: 'center'
    }}>
      <TouchableOpacity 
      onPress={_moveToScreen}
      activeOpacity={1} style={{
        flex: 1,
        backgroundColor: '#F7F6F5',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
      }}>
        <Text>Xem tất cả</Text>
      </TouchableOpacity>
    </View>
  }, [columnType])
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <SearchBar searchText={undefined} keyWord={undefined}/>
        <ScrollView style={homeStyle.scrollview}>
          <View style={{ flex: 1 }}>
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={homeStyle.wrap}
              scrollEventThrottle={0}
            >
              {
                image.map((e: ImageSourcePropType, index: React.Key | null | undefined) =>
                  <Image
                    key={index}
                    resizeMode='contain'
                    style={homeStyle.wrap}
                    source={e}
                  ></Image>
                )
              }
            </ScrollView>
            <View style={{ backgroundColor: 'white' }}>
              <View style={homeStyle.viewText}><Text style={homeStyle.title}>Danh mục</Text></View>
              <View style={homeStyle.viewBtnIcon}>
                <TouchableOpacity style={homeStyle.btnTouch}>
                  <ImageBackground source={require('../../assets/images/icons/fruit.png')}
                    style={homeStyle.btnIcon}
                  ></ImageBackground>
                  <Text style={homeStyle.btnText}>Hoa quả</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.btnTouch}>
                  <ImageBackground source={require('../../assets/images/icons/seed.png')}
                    style={homeStyle.btnIcon}
                  ></ImageBackground>
                  <Text style={homeStyle.btnText}>Củ & Hạt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.btnTouch}>
                  <ImageBackground source={require('../../assets/images/icons/bag.png')}
                    style={homeStyle.btnIcon}
                  ></ImageBackground>
                  <Text style={homeStyle.btnText}>Thực phẩm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.btnTouch}>
                  <ImageBackground source={require('../../assets/images/icons/fashion.png')}
                    style={homeStyle.btnIcon}
                    imageStyle={homeStyle.btnIcon}
                  ></ImageBackground>
                  <Text style={homeStyle.btnText}>Thời trang</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Sản phẩm bán chạy nhất */}
            <View style={{ backgroundColor: 'white', marginTop: 5 }}>
              <View style={homeStyle.viewText}><Text style={homeStyle.title}>Sản phẩm bán chạy</Text></View>
              <FlatList
                style={homeStyle.virturList}
                data={dataSold$.slice(0, 10)}
                renderItem={(props) => <ItemListBestSeller props={props} />}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={_showMoreData}
                onEndReached={() => setColumnType(0)}
                onEndReachedThreshold={0}
                horizontal
              />
            </View>
            {/* Sản phẩm bán theo mùa */}
            <View style={{ backgroundColor: 'white', marginTop: 10 }}>
              <View style={homeStyle.viewText}><Text style={homeStyle.title}>Theo mùa</Text></View>
              <FlatList
                style={homeStyle.virturList}
                data={dataSeason$.slice(0, 10)}
                renderItem={({ item }: { item: PropsData }) => <ItemList item={item} />}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                onEndReached={() => setColumnType(1)}
                onEndReachedThreshold={0}
                ListFooterComponent={_showMoreData}
                horizontal
              />
            </View>

          </View>
        </ScrollView>
      </>
    </TouchableWithoutFeedback>
  );
}
export default HomeScreen;