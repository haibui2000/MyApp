import * as React from 'react';
import { Text, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import headerStyle from './header.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Header = ({ name, children }: { name: string | undefined, children: object | undefined }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={headerStyle.keyboardView} >
                <View style={headerStyle.viewDetail}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={30} color="white" />
                    </TouchableOpacity>
                    {name ? <Text style={headerStyle.text}>{name}</Text> : null}
                </View>
            </View>
            {children}
        </>
    );
}
export default Header;