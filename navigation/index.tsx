/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Animated, ColorSchemeName, Dimensions, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AccountScreen from '../screens/AccountScreen';
import CreateScreen from '../screens/CreateItem/CreateScreen';
import DetailProd from '../screens/Detail/DetailProd';
import HomeScreen from '../screens/Home/HomeScreen';
import NotifiScreen from '../screens/NotifiScreen';
import StoreScreen from '../screens/Store/StoreScreen';
import { RootStackParamList, RootTabParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const rsWidth = Dimensions.get('window').width
const rsHeight = Dimensions.get('window').height
const color = '#00BF66'
const marginAnimate = 15

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <SafeAreaProvider >
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={BottomNavigate} />
          <Stack.Screen name="DetailProd" component={DetailProd} />
          <Stack.Screen name="CreateScreen" component={CreateScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
//       <Stack.Group screenOptions={{ presentation: 'modal' }}>
//         <Stack.Screen name="Modal" component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomNavigate = () => {
  const tabOffsetValue = React.useRef(new Animated.Value(marginAnimate)).current;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 10,
          left: 10,
          right: 10,
          // Max Height...
          height: rsHeight * .08,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
        }
      }}
    >

      <Tab.Screen name={"HomeScreen"} component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.screen}>
            <FontAwesome5
              name="home"
              size={20}
              color={focused ? color : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: marginAnimate,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

      <Tab.Screen name={"StoreScreen"} component={StoreScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.screen}>
            <FontAwesome5
              name="store"
              size={20}
              color={focused ? color : 'gray'}
            ></FontAwesome5>
          </View>
        ),

      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() + marginAnimate,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

      <Tab.Screen name={"Create"} component={CreateScreen} options={{
        tabBarButton: (() => (
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')} activeOpacity={1} style={styles.createPro}>
              <FontAwesome5
                name="plus"
                size={20}
                color='white'
              ></FontAwesome5>
            </TouchableOpacity>
          </View>
        ))
      }} ></Tab.Screen>

      <Tab.Screen name={"NotifiScreen"} component={NotifiScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.screen}>
            <Ionicons
              name="notifications"
              size={20}
              color={focused ? color : 'gray'} />
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 3 + marginAnimate,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

      <Tab.Screen name={"AccountScreen"} component={AccountScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.screen}>
            <FontAwesome5
              name="user-alt"
              size={20}
              color={focused ? color : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 4 + marginAnimate,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

    </Tab.Navigator>)
}

function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 40
  return width / 5
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    position: 'absolute',
  },
  animate: {
    maxWidth: getWidth() - 30,
    height: 2,
    backgroundColor: color,
    position: 'absolute',
    bottom: rsHeight * .09,
    borderRadius: 20,
    left: 20,
    right: 20
  },
  createPro: {
    width: rsWidth * .15,
    height: rsWidth * .15,
    backgroundColor: color,
    borderRadius: (rsWidth * .15) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  }
});
