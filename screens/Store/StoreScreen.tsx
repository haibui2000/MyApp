import * as React from 'react';
import { Keyboard, View, RefreshControl, Dimensions, Text, Image } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MyLoader from '../../components/SkeletonLoaderItem';
import { PropsData } from '../../types';
import SearchBar from '../Header/SearchBar';
import ItemList from '../Item/ItemList';
import storeStyle from './store.style';
import { dataSanPham$ } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getSanPhams, searchSanPhams } from '../../redux/actions';

const rsHeight = Dimensions.get('window').height
const NoData = () => {
  return <>
    <View style={storeStyle.viewNoData}>
      <Image resizeMode='center' style={storeStyle.imgNoData} source={require("../../assets/images/another/nodata.png")} />
      <Text style={storeStyle.txtNoData}>Không có dữ liệu ...</Text>
    </View>
  </>
}

function MyApp({ searchText }: { searchText: string | undefined }) {
  const dispatch = useDispatch()
  const {
    data$,
    isLoading,
    nextPage,
    status,
  } = useSelector(dataSanPham$);

  const onRefresh = React.useCallback(() => {
    const _action = status ? dispatch(searchSanPhams.searchSanPhamsRequest({ pagenumber: 0, refreshing: true, searchText: searchText })) :
    dispatch(getSanPhams.getSanPhamsRequest({ pagenumber: 0, refreshing: true }))
    return () => _action
  }, [status]);

  const renderMoreData = React.useCallback(() => {
    const _action = status ? dispatch(searchSanPhams.searchSanPhamsRequest({ pagenumber: nextPage, refreshing: true, searchText: searchText })) :
      dispatch(getSanPhams.getSanPhamsRequest({ pagenumber: nextPage }))
    return () => _action
  }, [nextPage])

  return (
    <View style={storeStyle.container}>
      <View style={{ flex: 1 }}>
        {data$.length ? <FlatList
          style={storeStyle.virturList}
          data={true ? data$ : []}
          contentInset={{ bottom: rsHeight / 4.5 }}
          numColumns={2}
          renderItem={({ item }: { item: PropsData }) => isLoading ? <MyLoader /> : <ItemList item={item} />}
          keyExtractor={(item: any) => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />
          }
          onEndReached={renderMoreData}
          onEndReachedThreshold={0}
        /> : <NoData />}
      </View>
    </View>
  )
}

function StoreScreen({ route }: { route: { params: { searchText: string, keyWord: string } } }) {
  return (
    <>
      <SearchBar searchText={route.params?.searchText} keyWord={route.params?.keyWord} />
      <TouchableWithoutFeedback style={storeStyle.container} onPress={() => Keyboard.dismiss()}>
        <MyApp searchText={route.params?.searchText} />
      </TouchableWithoutFeedback>
    </>
  );
}
export default React.memo(StoreScreen); 