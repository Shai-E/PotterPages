import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import {useAppSelector} from '../hooks/reduxHooks';
import FavoriteList from '../components/FavoriteList';
import {selectFavoritesList} from '../store/selectors';

const FavoritesScreen: React.FC = () => {
  const favorites = useAppSelector(selectFavoritesList);

  return (
    <ScreenContainer>
      <FavoriteList favorites={favorites} />
    </ScreenContainer>
  );
};

export default FavoritesScreen;
