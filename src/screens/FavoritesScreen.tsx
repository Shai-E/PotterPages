import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import {useAppSelector} from '../hooks/reduxHooks';
import FavoriteList from '../components/FavoriteList';

const FavoritesScreen: React.FC = () => {
  const favorites = useAppSelector(state => state.books.favorites);

  return (
    <ScreenContainer>
      <FavoriteList favorites={favorites} />
    </ScreenContainer>
  );
};

export default FavoritesScreen;
