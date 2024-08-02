import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// redux
import {useAppSelector} from '../hooks/reduxHooks';
// navigation
import {useRoute} from '@react-navigation/native';
// hooks
import {useToggleFavorite} from '../hooks/useToggleFavorite';
// types
import {Book} from '../types/entities';
// styles
import StarIcon from '../assets/Star';
import {light} from '../fixtures/colors.json';
// fixtures
import {en} from '../fixtures/langs.json';

const BookDetails: React.FC = () => {
  const route = useRoute();
  const {bookId} = route.params as {bookId: string};
  const book = useAppSelector(state => state.books.booksMap[bookId]) as Book;
  const handleToggleFavorite = useToggleFavorite();

  if (!book) {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.errorText}>{en.bookNotFound}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image source={{uri: book.cover}} style={styles.bookCover} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.releaseDate}>{en.released + book.releaseDate}</Text>
        <Text style={styles.pages}>{en.pages + book.pages}</Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleToggleFavorite.bind(this, book.id)}>
          <StarIcon fill={!book.isFavorite ? 'transparent' : undefined} />
          <Text style={styles.favoriteButtonText}>
            {book.isFavorite ? en.removeFromFavorites : en.addToFavorites}
          </Text>
        </TouchableOpacity>
        <Text style={styles.description}>{book.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: light.background,
  },
  bookCover: {
    width: 180,
    height: 270,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: light.subtle,
  },
  bookInfo: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: light.secondary,
    padding: 20,
    borderRadius: 10,
    shadowColor: light.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: light.secondaryText,
  },
  releaseDate: {
    fontSize: 16,
    color: light.subtitle,
    marginBottom: 5,
  },
  pages: {
    fontSize: 16,
    color: light.subtitle,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: light.info,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  favoriteButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: light.active,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: light.errorText,
  },
});

export default BookDetails;
