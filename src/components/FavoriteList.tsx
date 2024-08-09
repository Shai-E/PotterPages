import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
// components
import FavoriteItem from './FavoriteItem';
// styles
import EmptyFavoritesPrompt from './EmptyFavoritesPrompt';

type FavoriteListProps = {
  favorites: string[];
};

const FavoriteList: React.FC<FavoriteListProps> = ({favorites}) => {
  const keyExtractor = (bookId: string) => 'favorite' + bookId;
  const renderItem = ({item}: {item: string}) => <FavoriteItem bookId={item} />;

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={
          favorites.length === 0 && styles.contentContainer
        }
        ListEmptyComponent={<EmptyFavoritesPrompt />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default FavoriteList;
