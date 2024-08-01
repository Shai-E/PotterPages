import {call, put, takeEvery} from 'redux-saga/effects';
import {Book} from '../../types/book';
import {
  getBooksSuccess,
  getBooksFailure,
  updateFavorites,
} from '../reducers/booksReducer';

const URL = 'https://potterapi-fedeperin.vercel.app/en/books';

function* fetchBooks() {
  try {
    const response: Response = yield call(() => fetch(URL));
    const books: Book[] = yield call(() => response.json());
    yield put(getBooksSuccess(books));
  } catch (e) {
    yield put(getBooksFailure());
  }
}

function* updateFavoriteList(dispachedData: {type: string; payload: number}) {
  yield put(updateFavorites(dispachedData.payload));
}

export function* bookSaga() {
  yield takeEvery('books/getBooks', fetchBooks);
}

export function* favoriteSaga() {
  yield takeEvery('books/toggleFavorite', updateFavoriteList);
}
