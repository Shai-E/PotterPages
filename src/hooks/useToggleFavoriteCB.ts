import {useAppDispatch} from './reduxHooks';
import {toggleFavorite} from '../store/reducers/booksReducer';

export const useToggleFavoriteCB = () => {
  const dispatch = useAppDispatch();

  return (bookId: string) => {
    dispatch(toggleFavorite(bookId));
  };
};
