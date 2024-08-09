import {useNavigation} from '@react-navigation/native';
// types
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenNames} from '../types/navigation';

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

export const useNavigateToBooksCB = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToBooks = () => {
    navigation.navigate(ScreenNames.TABS, {screen: ScreenNames.BOOKS});
  };

  return navigateToBooks;
};
