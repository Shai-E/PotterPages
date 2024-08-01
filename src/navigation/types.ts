export type RootStackParamList = {
  tabs: undefined;
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
