import {View, FlatList, StyleSheet} from 'react-native';
import FavoriteItem from './FavoriteItem';
import React from 'react';
import NoContent from './NoContent';
import {heightPercentageToDP} from 'react-native-responsive-screen';

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
        ListEmptyComponent={
          <NoContent listHeight={heightPercentageToDP('80%')} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
});

export default FavoriteList;
