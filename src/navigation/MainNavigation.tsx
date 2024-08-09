import React from 'react';
// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import BookDetailScreen from '../screens/BookDetailScreen';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../services/localization/keys';
// styles
import {light} from '../fixtures/colors.json';
// types
import {ScreenNames} from '../types/navigation';

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
        name={ScreenNames.DETAILS}
        component={BookDetailScreen}
        options={{
          headerShown: false,
          title: t(TranslationKeys.bookDetails),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
