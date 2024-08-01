import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {Book} from '../types/book';
import StarIcon from '../assets/Star';
import {toggleFavorite} from '../store/reducers/booksReducer';

const BookDetailScreen: React.FC = () => {
  const route = useRoute();
  const {bookId} = route.params as {bookId: string};
  const book = useAppSelector(state => state.books.booksMap[bookId]) as Book;
  const dispatch = useAppDispatch();

  if (!book) {
    return (
      <ScreenContainer>
        <View style={styles.centeredView}>
          <Text style={styles.errorText}>Book not found.</Text>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{uri: book.cover}} style={styles.bookCover} />
        <View style={styles.bookInfo}>
          <Text style={styles.title}>{book.title}</Text>
          {/* <Text style={styles.author}>by {book.author}</Text> */}
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => {
              dispatch(toggleFavorite(book.id));
            }}>
            <StarIcon fill={!book.isFavorite ? 'transparent' : undefined} />
            <Text style={styles.favoriteButtonText}>
              {book.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.description}>{book.description}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  bookCover: {
    width: 150,
    height: 225,
    borderRadius: 8,
    marginBottom: 20,
  },
  bookInfo: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 30,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  favoriteButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#007BFF',
  },
  buyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000',
  },
});

export default BookDetailScreen;
