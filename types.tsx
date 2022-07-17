/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type PropsDataDetail = {
  title: string;
  weightMax: number;
  unit: string;
  nguyenLieu: string;
  origin: string;
  nsx: string;
}

export type PropsData = {
  id: number;
  img: string;
  backImg: string;
  typeSP:number;
  arrImg: Array<string>;
  name: string;
  details: PropsDataDetail;
  price: number;
  priceSale: number;
  sale: boolean;
  sold: number;
  hide: boolean;
}

export type RootStackParamList = {
  DetailProd: {
    item: PropsData
  };
  StoreScreen: {
    searchText: string | undefined,
    keyWord: string | undefined,
  };
  Home: NavigatorScreenParams<RootTabParamList> | undefined;
  CreateScreen: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  HomeScreen: undefined;
  StoreScreen: undefined;
  Create: undefined;
  NotifiScreen: undefined;
  AccountScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
