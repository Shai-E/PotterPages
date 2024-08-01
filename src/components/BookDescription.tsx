import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Book} from '../types/book';

type BookDescriptionProps = {
  book: Book | undefined; // It could be undefined if there is no book to show
};

const BookDescription: React.FC<BookDescriptionProps> = ({book}) => {
  return (
    <View style={styles.bookDescriptionContainer}>
      {book && (
        <View style={styles.bookDescriptionInnerContainer}>
          <Text
            style={styles.bookDescriptionText}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {book.description}
          </Text>
          <Text style={styles.continueReadingText}>{'Continue reading >'}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bookDescriptionContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'flex-start',
  },
  bookDescriptionInnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bookDescriptionText: {
    color: 'white',
    fontSize: 20,
  },
  continueReadingText: {
    color: '#58a6ff',
  },
});

export default BookDescription;
