import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import {useAppSelector} from '../hooks/reduxHooks';
import FavoriteItem from '../components/FavoriteItem';

const FavoritesScreen: React.FC = () => {
  const favorites = useAppSelector(state => state.books.favorites);

  const renderItem = ({item}: {item: string}) => <FavoriteItem bookId={item} />;

  return (
    <ScreenContainer>
      <View style={styles.listContainer}>
        <FlatList
          data={favorites}
          keyExtractor={item => 'favorite' + item.toString()}
          renderItem={renderItem}
          initialNumToRender={10}
          removeClippedSubviews={true}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
});

export default FavoritesScreen;
