import {NavigatorScreenParams} from '@react-navigation/native';

export enum ScreenNames {
  FAVORITES = 'favorites',
  BOOKS = 'books',
  DETAILS = 'details',
  TABS = 'tabs',
  MAIN = 'main',
}

export type RootStackParamList = {
  [ScreenNames.TABS]: NavigatorScreenParams<TabsParamList>;
  [ScreenNames.MAIN]: {
    screen: keyof MainStackParamList;
    params: MainStackParamList[keyof MainStackParamList];
  };
};

export type TabsParamList = {
  [ScreenNames.FAVORITES]: undefined;
  [ScreenNames.BOOKS]: undefined;
};

export type MainStackParamList = {
  [ScreenNames.DETAILS]: {bookId: string};
};
