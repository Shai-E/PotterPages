import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ViewToken} from 'react-native';
//redux
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {getBooks, toggleFavorite} from '../store/reducers/booksReducer';
//hooks
import {useDebounce} from '../hooks/useDebounce';
//components
import ScreenContainer from '../components/ScreenContainer';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import BookDescription from '../components/BookDescription';
//fixtures
import {light} from '../fixtures/colors.json';
//types
import {Book} from '../types/book';

const BooksScreen: React.FC = () => {
  const [searchKey, setSearchKey] = useState('');
  const [viewableIndex, setViewableIndex] = useState<number | null>();
  const books = useAppSelector(state => state.books.books);
  const dispatch = useAppDispatch();
  const debouncedSearchKey = useDebounce(searchKey, 300);

  useEffect(() => {
    if (!books || books.length === 0) {
      dispatch(getBooks());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredBooks = useMemo(() => {
    return books.filter(book =>
      book?.title.toLowerCase().includes(debouncedSearchKey.toLowerCase()),
    );
  }, [books, debouncedSearchKey]);

  const displayBooks = useMemo(() => {
    if (filteredBooks.length > 0 && searchKey) {
      return filteredBooks;
    }
    if (!searchKey) {
      return books;
    }
    return [];
  }, [filteredBooks, searchKey, books]);

  const onFavoritePress = useCallback(
    (bookId: string) => {
      dispatch(toggleFavorite(bookId));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken<Book>[]}) => {
      if (viewableItems[0]) {
        setViewableIndex(viewableItems[0].index);
      }
    },
    [],
  );

  return (
    <ScreenContainer backgroundColor={light.primary}>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <BookList
        books={displayBooks}
        onFavoritePress={onFavoritePress}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      {(viewableIndex || viewableIndex === 0) && (
        <BookDescription book={displayBooks[viewableIndex]} />
      )}
    </ScreenContainer>
  );
};

export default BooksScreen;
