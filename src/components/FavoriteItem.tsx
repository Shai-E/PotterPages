import React, {memo} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FavoritesStackParamList} from '../navigation/types';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {toggleFavorite} from '../store/reducers/booksReducer';
import StarIcon from '../assets/Star';

type FavoritesScreenNavigationProp = NativeStackNavigationProp<
  FavoritesStackParamList,
  'FavoritesScreen'
>;

type FavoriteItemProps = {
  bookId: string;
};

const FavoriteItem: React.FC<FavoriteItemProps> = ({bookId}) => {
  const navigation = useNavigation<FavoritesScreenNavigationProp>();
  const favorite = useAppSelector(state => state.books.booksMap[bookId]);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(favorite.id));
  };

  const handleNavigateToDetail = () => {
    navigation.navigate('BookDetail', {
      bookId: favorite.id.toString(),
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateToDetail}>
      <Image source={{uri: favorite.cover}} style={styles.image} />
      <Text style={styles.title}>{favorite.title}</Text>
      <TouchableOpacity onPress={handleToggleFavorite}>
        <StarIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 75,
    borderRadius: 4,
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  favoriteIcon: {color: 'gold'},
});

export default memo(FavoriteItem);
