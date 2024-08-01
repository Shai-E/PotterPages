import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  BooksStackParamList,
  FavoritesStackParamList,
} from '../navigation/types';

type BooksScreenNavigationProp = NativeStackNavigationProp<
  BooksStackParamList | FavoritesStackParamList,
  'BookDetail'
>;

export const useNavigateToBookDetail = () => {
  const navigation = useNavigation<BooksScreenNavigationProp>();

  const navigateToBookDetail = (bookId: string | number) => {
    navigation.navigate('BookDetail', {bookId: bookId.toString()});
  };

  return navigateToBookDetail;
};
