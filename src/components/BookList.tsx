import React, {memo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// components
import BookCard from './BookCard';
import NoContent from './NoContent.tsx';
// styles
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// types
import {Book, IsLoading} from '../types/entities.ts';

type BookListProps = {
  books: Book[];
  onFavoritePress: (bookId: string) => void;
  isLoading: IsLoading;
};

const BookList: React.FC<BookListProps> = ({
  books,
  onFavoritePress,
  isLoading,
}) => {
  const keyExtractor = (item: Book) => 'book' + item.id;
  const renderItem = ({item, index}: {item: Book; index: number}) => (
    <BookCard book={item} onFavoritePress={onFavoritePress} index={index} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={isLoading ? null : <NoContent />}
        numColumns={2}
        style={styles.bookList}
        contentContainerStyle={books.length === 0 && styles.container}
        snapToInterval={hp('42.5%')}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookList: {
    marginTop: 10,
  },
});

export default memo(BookList);
