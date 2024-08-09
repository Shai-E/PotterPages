import React from 'react';
// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import BookDetailScreen from '../screens/BookDetailScreen';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../fixtures/keys';
// styles
import {light} from '../fixtures/colors.json';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitle: t(TranslationKeys.back),
        headerStyle: {
          backgroundColor: light.primary,
        },
        headerTintColor: light.primaryText,
      }}>
      <Stack.Screen
        name={t(TranslationKeys.details)}
        component={BookDetailScreen}
        options={{headerShown: false, title: t(TranslationKeys.bookDetails)}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
