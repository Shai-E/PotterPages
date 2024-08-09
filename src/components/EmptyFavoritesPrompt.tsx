import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
// components
import TextElement from './reusable/TextElement';
// hooks
import {useNavigateToBooksCB} from '../hooks/navigationHooks';
// localization
import {useTranslation} from 'react-i18next';
// styles
import {light} from '../fixtures/colors.json';
import {TranslationKeys} from '../services/localization/keys';

const EmptyFavoritesPrompt: React.FC = () => {
  const {t} = useTranslation();
  const handleNavigateToBooks = useNavigateToBooksCB();

  return (
    <View style={styles.container}>
      <TextElement style={styles.message}>
        {t(TranslationKeys.noFavorites)}
      </TextElement>
      <TextElement style={styles.subMessage}>
        {t(TranslationKeys.browseBooks)}
      </TextElement>
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
