import {useNavigation} from '@react-navigation/native';
// types
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  RootStackParamList,
  ScreenNames,
  TabsParamList,
} from '../types/navigation';

export const useNavigateToBookDetailCB = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToBookDetail = (bookId: string) => {
    navigation.navigate(ScreenNames.MAIN, {
      screen: ScreenNames.DETAILS,
      params: {bookId},
    });
  };

  return navigateToBookDetail;
};

export const useNavigateToTabCB = (tabName: keyof TabsParamList) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToBooks = () => {
    navigation.navigate(ScreenNames.TABS, {screen: tabName});
  };

  return navigateToBooks;
};
