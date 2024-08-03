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
  const renderItem = ({item}: {item: string}) => <FavoriteItem bookId={item} />;

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={favorites}
        keyExtractor={item => 'favorite' + item}
        renderItem={renderItem}
        initialNumToRender={10}
        removeClippedSubviews={true}
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
});

export default FavoriteList;
