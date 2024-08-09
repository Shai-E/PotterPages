import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// hooks
import {useNavigateToBooksCB} from '../hooks/navigationHooks';
// localization
import {useTranslation} from 'react-i18next';
// styles
import {light} from '../fixtures/colors.json';
import {TranslationKeys} from '../fixtures/keys';

const EmptyFavoritesPrompt: React.FC = () => {
  const {t} = useTranslation();
  const handleNavigateToBooks = useNavigateToBooksCB();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{t(TranslationKeys.noFavorites)}</Text>
      <Text style={styles.subMessage}>{t(TranslationKeys.browseBooks)}</Text>
      <Button
        title={t(TranslationKeys.goToBooks)}
        onPress={handleNavigateToBooks}
      />
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
