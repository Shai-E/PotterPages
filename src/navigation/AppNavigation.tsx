import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// navigators
import TabNavigation from './TabNavigation';
import MainNavigation from './MainNavigation';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../services/localization/keys';
// styles
import {light} from '../fixtures/colors.json';
// types
import {RootStackParamList, ScreenNames} from '../types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: t(TranslationKeys.back),
          headerStyle: {
            backgroundColor: light.primary,
          },
          headerTintColor: light.primaryText,
        }}>
        <RootStack.Screen
          name={ScreenNames.TABS}
          component={TabNavigation}
          options={{title: t(TranslationKeys.tabs), headerShown: false}}
        />
        <RootStack.Screen
          name={ScreenNames.MAIN}
          component={MainNavigation}
          options={{
            title: t(TranslationKeys.main),
            headerShown: true,
            headerTitle: t(TranslationKeys.bookDetails),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
