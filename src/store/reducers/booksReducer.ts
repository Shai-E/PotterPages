import {createSlice} from '@reduxjs/toolkit';
// utils
import {genUniqueID} from '../../utils/genUniqueId';
// types
import {Book, IsLoading} from '../../types/entities';

const initialState = {
  books: [] as Book[],
  booksMap: {} as Record<string, Book>,
  favorites: [] as string[],
  isLoading: undefined as IsLoading,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    getBooks: state => {
      state.isLoading = true;
    },
    getBooksSuccess: (state, action) => {
      state.booksMap = {};
      for (const book of action.payload) {
        const id = genUniqueID();
        state.booksMap[id] = {
          ...book,
          isFavorite: false,
          id: id,
        };
        state.books.push(state.booksMap[id]);
      }
      state.isLoading = false;
    },
    getBooksFailure: state => {
      state.isLoading = false;
    },
    toggleFavorite: (state, action) => {
      state.booksMap[action.payload].isFavorite =
        !state.booksMap[action.payload].isFavorite;
    },
    updateFavorites: (state, action) => {
      if (state.booksMap[action.payload].isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          favorite => favorite !== action.payload,
        );
      }
    },
  },
});

export const {
  getBooks,
  getBooksSuccess,
  getBooksFailure,
  toggleFavorite,
  updateFavorites,
} = bookSlice.actions;
