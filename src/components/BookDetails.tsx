import React from 'react';
import {
  View,
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
// components
import TextElement from './reusable/TextElement';
// hooks
import {useToggleFavoriteCB} from '../hooks/useToggleFavoriteCB';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../services/localization/keys';
// styles
import StarIcon from '../assets/Star';
import {useColors} from '../hooks/useColors';
// types
import {Book} from '../types/entities';

const BookDetails: React.FC = () => {
  const colors = useColors();
  const {t} = useTranslation();
  const route = useRoute();
  const {bookId} = route.params as {bookId: string};
  const book = useAppSelector(state => selectBookById(state, bookId)) as Book;
  const handleToggleFavorite = useToggleFavoriteCB();

  if (!book) {
    return (
      <View style={styles.centeredView}>
        <TextElement style={[styles.errorText, {color: colors.errorText}]}>
          {t(TranslationKeys.bookNotFound)}
        </TextElement>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.contentContainer,
        {backgroundColor: colors.background},
      ]}>
      <Image
        source={{uri: book.cover}}
        style={[styles.bookCover, {borderColor: colors.subtle}]}
      />
      <View
        style={[
          styles.bookInfo,
          {backgroundColor: colors.secondary, shadowColor: colors.shadow},
        ]}>
        <TextElement style={[styles.title, {color: colors.secondaryText}]}>
          {book.title}
        </TextElement>
        <TextElement style={[styles.releaseDate, {color: colors.subtitle}]}>
          {t(TranslationKeys.released) + book.releaseDate}
        </TextElement>
        <TextElement style={[styles.pages, {color: colors.subtitle}]}>
          {t(TranslationKeys.pages) + book.pages}
        </TextElement>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleToggleFavorite.bind(this, book.id)}>
          <StarIcon fill={!book.isFavorite ? colors.transparent : undefined} />
          <TextElement
            style={[styles.favoriteButtonText, {color: colors.active}]}>
            {t(
              TranslationKeys[
                book.isFavorite ? 'removeFromFavorites' : 'addToFavorites'
              ],
            )}
          </TextElement>
        </TouchableOpacity>
        <TextElement style={[styles.description, {color: colors.info}]}>
          {book.description}
        </TextElement>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  bookCover: {
    width: 180,
    height: 270,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
  },
  bookInfo: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
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
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  pages: {
    fontSize: 16,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
  },
});

export default BookDetails;
