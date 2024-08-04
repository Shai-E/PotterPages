import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

export const useNavigateToBookDetailCB = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToBookDetail = (bookId: string) => {
    navigation.navigate('main', {
      screen: 'details',
      params: {bookId},
    });
  };

  return navigateToBookDetail;
};

export const useNavigateToBooksCB = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToBooks = () => {
    navigation.navigate('tabs', {screen: 'books'});
  };

  return navigateToBooks;
};
