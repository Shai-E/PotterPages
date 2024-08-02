import React, {memo} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// redux
import {useAppSelector} from '../hooks/reduxHooks';
// hooks
import {useNavigateToBookDetail} from '../hooks/navigationHooks';
import {useToggleFavorite} from '../hooks/useToggleFavorite';
// styles
import StarIcon from '../assets/Star';
import {light} from '../fixtures/colors.json';

type FavoriteItemProps = {
  bookId: string;
};

const FavoriteItem: React.FC<FavoriteItemProps> = ({bookId}) => {
  const favorite = useAppSelector(state => state.books.booksMap[bookId]);

  const handleToggleFavorite = useToggleFavorite();

  const navigateToBookDetail = useNavigateToBookDetail();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToBookDetail.bind(this, favorite.id)}>
      <Image source={{uri: favorite.cover}} style={styles.image} />
      <Text style={styles.title}>{favorite.title}</Text>
      <TouchableOpacity
        onPress={handleToggleFavorite.bind(this, favorite.id)}
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
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
    backgroundColor: light.secondary,
    borderRadius: 8,
    marginVertical: 5,
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
    color: light.secondaryText,
  },
});

export default memo(FavoriteItem);
