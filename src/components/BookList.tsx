import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// components
import BookCard from './BookCard';
import NoContent from './NoContent.tsx';
// styles
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// types
import {Book} from '../types/book.ts';

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
  const renderItem = useCallback(
    ({item, index}: {item: Book; index: number}) => (
      <BookCard book={item} onFavoritePress={onFavoritePress} index={index} />
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
          isLoading ? null : <NoContent listHeight={hp('70%')} />
        }
        numColumns={2}
        snapToInterval={hp('42.5%')}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
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
});

export default memo(BookList);
