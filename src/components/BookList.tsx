import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View, Text, ViewToken} from 'react-native';
import BookCard from './BookCard';
import NoContentIcon from '../assets/NoBooks.tsx';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Book} from '../types/book.ts';

type BookListProps = {
  books: Book[];
  onFavoritePress: (bookId: string) => void;
  onViewableItemsChanged: ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => void;
};

const BookList: React.FC<BookListProps> = ({
  books,
  onFavoritePress,
  onViewableItemsChanged,
}) => {
  const NoContent = (
    <View style={styles.noContent}>
      <NoContentIcon
        width={widthPercentageToDP('90%')}
        height={widthPercentageToDP('90%')}
      />
    </View>
  );

  const renderItem = useCallback(
    ({item}: {item: Book}) => (
      <BookCard book={item} onFavoritePress={onFavoritePress} />
    ),
    [onFavoritePress],
  );

  const keyExtractor = useCallback((item: Book) => 'book' + item.id, []);

  const ITEM_WIDTH = widthPercentageToDP('70%');
  const ITEM_SPACING = widthPercentageToDP('5%');

  const getItemLayout = (
    _data: ArrayLike<Book> | null | undefined,
    index: number,
  ) => ({
    length: ITEM_WIDTH,
    offset: (ITEM_WIDTH + ITEM_SPACING) * index,
    index,
  });

  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={keyExtractor}
        style={styles.bookList}
        ListEmptyComponent={NoContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={widthPercentageToDP('75%')}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        getItemLayout={getItemLayout}
        removeClippedSubviews={true}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={3}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={renderItem}
      />
      <Text style={styles.booksFoundText}>
        {books.length > 0 ? books.length + ' books found' : 'No books found'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bookList: {
    height: 'auto',
    marginTop: 10,
  },
  noContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: widthPercentageToDP('110%'),
  },
  booksFoundText: {
    color: '#58a6ff',
    marginHorizontal: 10,
  },
});

export default BookList;
