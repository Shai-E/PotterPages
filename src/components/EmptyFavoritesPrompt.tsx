import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// hooks
import {useNavigateToBooks} from '../hooks/navigationHooks';
// fixtures
import {en} from '../fixtures/langs.json';
// styles
import {light} from '../fixtures/colors.json';

const EmptyFavoritesPrompt: React.FC = () => {
  const handleNavigateToBooks = useNavigateToBooks();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{en.noFavorites}</Text>
      <Text style={styles.subMessage}>{en.browseBooks}</Text>
      <Button title={en.goToBooks} onPress={handleNavigateToBooks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: light.primaryText,
  },
  subMessage: {
    fontSize: 16,
    color: light.subtle,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default EmptyFavoritesPrompt;
