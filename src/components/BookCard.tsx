import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import {Book} from '../types/book';
import StarIcon from '../assets/Star';
import {useAppSelector} from '../hooks/reduxHooks';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useNavigateToBookDetail} from '../hooks/navigationHooks';

interface BookCardProps {
  book: Book;
  onFavoritePress: (bookNumber: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({book, onFavoritePress}) => {
  const isFavorite = useAppSelector(
    state => state.books.booksMap[book.id]?.isFavorite,
  );

  const navigateToBookDetail = useNavigateToBookDetail();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.card}
      onPress={navigateToBookDetail.bind(this, book.id)}>
      <ImageBackground source={{uri: book.cover}} style={styles.cover}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.date}>{book.releaseDate}</Text>
          <TouchableOpacity
            onPress={onFavoritePress.bind(this, book.id)}
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
    marginHorizontal: widthPercentageToDP('2.5%'),
    // borderRadius: 10,
    overflow: 'hidden',
    // elevation: 3, // for Android shadow
    // shadowColor: '#000', // for iOS shadow
    // shadowOffset: {width: 0, height: 2}, // for iOS shadow
    // shadowOpacity: 0.25, // for iOS shadow
    // shadowRadius: 3.84, // for iOS shadow
  },
  cover: {
    width: widthPercentageToDP('70%'),
    height: widthPercentageToDP('110%'),
    justifyContent: 'flex-end',
  },
  infoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default memo(BookCard);
