import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import {bookSlice} from '../store/reducers/booksReducer';
import {bookSaga, favoriteSaga} from './sagas/bookSaga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['books', 'booksMap', 'favorites'],
};

const saga = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, bookSlice.reducer);

export const store = configureStore({
  reducer: {
    books: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(saga),
});
saga.run(bookSaga);
saga.run(favoriteSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
