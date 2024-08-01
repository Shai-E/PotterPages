import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Book} from '../types/book';
import StarIcon from '../assets/Star';
import {useAppSelector} from '../hooks/reduxHooks';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigateToBookDetail} from '../hooks/navigationHooks';

interface BookCardProps {
  book: Book;
  onFavoritePress: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({book, onFavoritePress}) => {
  const isFavorite = useAppSelector(
    state => state.books.booksMap[book.id]?.isFavorite,
  );

  const navigateToBookDetail = useNavigateToBookDetail();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={navigateToBookDetail.bind(this, book.id)}>
      <ImageBackground
        source={{uri: book.cover}}
        style={styles.cover}
        imageStyle={styles.image}
        resizeMode={'cover'}>
        <View style={styles.overlay}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.date}>{book.releaseDate}</Text>
          </View>
          <TouchableOpacity
            onPress={onFavoritePress.bind(this, book.id)}
            hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}
            style={styles.favoriteIcon}>
            <StarIcon fill={!isFavorite ? 'transparent' : undefined} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: heightPercentageToDP('40%'),
    width: widthPercentageToDP('45%'),
    margin: widthPercentageToDP('2.5%'),
    borderRadius: 15,
    overflow: 'hidden',
  },
  cover: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 15,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  infoContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#ddd',
    fontSize: 12,
    marginTop: 2,
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
  },
});

export default memo(BookCard);
