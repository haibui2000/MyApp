import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Dimensions, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import headerStyle from './header.style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

import { useDispatch } from 'react-redux';
import { searchSanPhams, getSanPhams, statusData } from '../../redux/actions';

function SearchBar({ searchText, keyWord, }: { searchText: string | undefined, keyWord: string | undefined, }) {
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const [showClearButton, setClearbutton] = React.useState<boolean>(false)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch()

  React.useEffect(() => {
    searchText ? setInputSearch(searchText) : setInputSearch("")
    const _action = keyWord ? dispatch(getSanPhams.getSanPhamsRequest({ pagenumber: 0, refreshing: true })) : null
    return () => _action
  }, [searchText])

  const _onSubmitFocus = React.useCallback(() => {
    setInputSearch("");
    setClearbutton(false);
    navigation.navigate('StoreScreen', { searchText: inputSearch, keyWord: undefined })
    const _setStatus = dispatch(statusData.setStatusData("search"))
    const _onSearch = dispatch(searchSanPhams.searchSanPhamsRequest({ pagenumber: 0, refreshing: true, searchText: inputSearch }))
    return () => { _onSearch; _setStatus }
  }, [inputSearch])

  const _onChangeText = (text: string) => {
    setInputSearch(text);
    text.length ? setClearbutton(true) : setClearbutton(false)
  }

  const _onClearText = React.useCallback(() => {
    setInputSearch("");
    setClearbutton(false);
    const _setStatus = dispatch(statusData.setStatusData(""))
    const _action = dispatch(getSanPhams.getSanPhamsRequest({ pagenumber: 0, refreshing: true }))
    return () => {
      _action;
      _setStatus;
    }
  }, [searchText])
  return (
    <>
      <KeyboardAvoidingView style={headerStyle.keyboardView}>
        <TextInput
          keyboardType='web-search'
          // clearTextOnFocus
          style={headerStyle.inputSearch}
          onChangeText={_onChangeText}
          onSubmitEditing={_onSubmitFocus}
          value={inputSearch}
          placeholder='Tìm kiếm ...'
          placeholderTextColor={'black'}
        >
        </TextInput>
        {showClearButton ? <TouchableOpacity
          onPress={_onClearText}
          activeOpacity={1}
          style={headerStyle.btnClear}

        >
          <MaterialIcons name="clear" size={18} color="black" />
        </TouchableOpacity> : null}
      </KeyboardAvoidingView>

    </>
  );
}
export default React.memo(SearchBar);