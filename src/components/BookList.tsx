import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BookCard from './BookCard';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Book} from '../types/book.ts';
import NoContent from './NoContent.tsx';

type BookListProps = {
  books: Book[];
  onFavoritePress: (bookId: string) => void;
  isLoading: boolean | undefined;
};

const BookList: React.FC<BookListProps> = ({
  books,
  onFavoritePress,
  isLoading,
}) => {
  console.log('BookList rendered');

  const renderItem = useCallback(
    ({item}: {item: Book}) => (
      <BookCard book={item} onFavoritePress={onFavoritePress} />
    ),
    [onFavoritePress],
  );

  const keyExtractor = useCallback((item: Book) => 'book' + item.id, []);

  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        data={books}
        keyExtractor={keyExtractor}
        style={styles.bookList}
        ListEmptyComponent={
          isLoading ? null : (
            <NoContent listHeight={heightPercentageToDP('70%')} />
          )
        }
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        snapToInterval={heightPercentageToDP('42.5%')}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        removeClippedSubviews={true}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={3}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    flex: 1,
  },
  bookList: {
    height: 'auto',
    marginTop: 10,
  },
  noContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP('70%'),
  },
  booksFoundText: {
    color: '#58a6ff',
    marginHorizontal: 10,
  },
});

export default memo(BookList);
