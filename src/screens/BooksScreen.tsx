import React, {useCallback, useEffect, useState} from 'react';
//redux
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {getBooks, toggleFavorite} from '../store/reducers/booksReducer';
import {selectBooksList, selectIsLoading} from '../store/selectors';
//hooks
import {useDebounce} from '../hooks/useDebounce';
//components
import ScreenContainer from '../components/ScreenContainer';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
// styles
import {useColors} from '../hooks/useColors';

const BooksScreen: React.FC = () => {
  const [searchKey, setSearchKey] = useState('');
  const books = useAppSelector(selectBooksList);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();
  const debouncedSearchKey = useDebounce(searchKey, 300);

  const colors = useColors();

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
    <ScreenContainer backgroundColor={colors.primary}>
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
