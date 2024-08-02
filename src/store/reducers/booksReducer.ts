import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../../types/entities';

const initialState = {
  books: [] as Book[],
  booksMap: {} as Record<string, Book>,
  favorites: [] as string[],
  isLoading: undefined as boolean | undefined,
  isRehydrated: false,
};

const genUUID = () => {
  return Math.floor(Math.random() * 100000000000000).toString();
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
        const id = genUUID();
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
  extraReducers: builder => {
    builder.addCase('persist/REHYDRATE', state => {
      state.isRehydrated = true;
    });
  },
});

export const {
  getBooks,
  getBooksSuccess,
  getBooksFailure,
  toggleFavorite,
  updateFavorites,
} = bookSlice.actions;
