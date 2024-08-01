import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
//types

const BooksScreen: React.FC = () => {
  const [searchKey, setSearchKey] = useState('');
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
    if (debouncedSearchKey === '') {
      return books;
    }

    return books.filter(book =>
      book?.title.toLowerCase().includes(debouncedSearchKey.toLowerCase()),
    );
  }, [books, debouncedSearchKey]);

  const onFavoritePress = useCallback(
    (bookId: string) => {
      dispatch(toggleFavorite(bookId));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <ScreenContainer backgroundColor={light.primary}>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <BookList books={filteredBooks} onFavoritePress={onFavoritePress} />
    </ScreenContainer>
  );
};

export default BooksScreen;
