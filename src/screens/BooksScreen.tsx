import React, {useCallback, useEffect, useState} from 'react';
//redux
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {getBooks, toggleFavorite} from '../store/reducers/booksReducer';
//hooks
import {useDebounce} from '../hooks/useDebounce';
//components
import ScreenContainer from '../components/ScreenContainer';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
//fixtures
import {light} from '../fixtures/colors.json';

const BooksScreen: React.FC = () => {
  const [searchKey, setSearchKey] = useState('');
  const books = useAppSelector(state => state.books.books);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const isLoading = useAppSelector(state => state.books.isLoading);

  const dispatch = useAppDispatch();
  const debouncedSearchKey = useDebounce(searchKey, 300);

  useEffect(() => {
    if (!books || books.length === 0) {
      dispatch(getBooks());
    }
  }, []);

  useEffect(() => {
    updateFilteredBooks();
  }, [books, debouncedSearchKey]);

  const updateFilteredBooks = useCallback(() => {
    setFilteredBooks(prevState => {
      if (debouncedSearchKey === '') {
        return books;
      }

      const nextState = books.filter(book =>
        book?.title.toLowerCase().includes(debouncedSearchKey.toLowerCase()),
      );

      if (prevState.length === nextState.length && nextState.length === 0) {
        return prevState;
      }

      return nextState;
    });
  }, [books, debouncedSearchKey]);

  const onFavoritePress = useCallback((bookId: string) => {
    dispatch(toggleFavorite(bookId));
  }, []);

  return (
    <ScreenContainer backgroundColor={light.primary}>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <BookList
        books={filteredBooks}
        onFavoritePress={onFavoritePress}
        isLoading={isLoading}
      />
    </ScreenContainer>
  );
};

export default BooksScreen;
