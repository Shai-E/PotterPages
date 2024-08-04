// types
import {RootState} from './store';
import {Book, IsLoading} from '../types/entities';

export const selectBookById = (state: RootState, bookId: string) =>
  state.books.booksMap[bookId];

export const selectIsFavorite = (state: RootState, bookId: string) =>
  state.books.booksMap[bookId]?.isFavorite;

export const selectIsLoading = (state: RootState): IsLoading =>
  state.books.isLoading;

export const selectFavoritesList = (state: RootState): string[] =>
  state.books.favorites;

export const selectBooksList = (state: RootState): Book[] => state.books.books;
