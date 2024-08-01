import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

export const useNavigateToBookDetail = () => {
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
