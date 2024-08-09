import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  tabs: NavigatorScreenParams<TabsParamList>;
  main: {
    screen: keyof MainStackParamList;
    params: MainStackParamList[keyof MainStackParamList];
  };
};

export type TabsParamList = {
  favorites: undefined;
  books: undefined;
};

export type MainStackParamList = {
  details: {bookId: string};
};

export enum ScreenNames {
  FAVORITES = 'favorites',
  BOOKS = 'books',
  DETAILS = 'details',
  TABS = 'tabs',
  MAIN = 'main',
}
