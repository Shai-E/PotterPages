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
import {selectBookById} from '../store/selectors';
// navigation
import {useRoute} from '@react-navigation/native';
// hooks
import {useToggleFavoriteCB} from '../hooks/useToggleFavoriteCB';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../fixtures/keys';
// styles
import StarIcon from '../assets/Star';
import {light} from '../fixtures/colors.json';
// types
import {Book} from '../types/entities';

const BookDetails: React.FC = () => {
  const {t} = useTranslation();
  const route = useRoute();
  const {bookId} = route.params as {bookId: string};
  const book = useAppSelector(state => selectBookById(state, bookId)) as Book;
  const handleToggleFavorite = useToggleFavoriteCB();

  if (!book) {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.errorText}>{t(TranslationKeys.bookNotFound)}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image source={{uri: book.cover}} style={styles.bookCover} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.releaseDate}>
          {t(TranslationKeys.released) + book.releaseDate}
        </Text>
        <Text style={styles.pages}>
          {t(TranslationKeys.pages) + book.pages}
        </Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleToggleFavorite.bind(this, book.id)}>
          <StarIcon fill={!book.isFavorite ? light.transparent : undefined} />
          <Text style={styles.favoriteButtonText}>
            {t(
              TranslationKeys[
                book.isFavorite ? 'removeFromFavorites' : 'addToFavorites'
              ],
            )}
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
