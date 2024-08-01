import {useAppDispatch} from '../hooks/reduxHooks';
import {toggleFavorite} from '../store/reducers/booksReducer';

export const useToggleFavorite = () => {
  const dispatch = useAppDispatch();

  return (bookId: string) => {
    dispatch(toggleFavorite(bookId));
  };
};
