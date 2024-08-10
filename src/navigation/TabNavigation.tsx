import React from 'react';
// navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screens
import BooksScreen from '../screens/BooksScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../services/localization/keys';
// styles
import BookmarkIcon from '../assets/Bookmark';
import BookIcon from '../assets/Book';
import {light} from '../fixtures/colors.json';
// types
import {ScreenNames, TabsParamList} from '../types/navigation';

const bookTabIcon = ({focused}: {focused: boolean}) => (
  <BookIcon
    width={20}
    height={20}
    color={focused ? light.primaryText : light.placeholder}
  />
);

const bookmarkTabIcon = ({focused}: {focused: boolean}) => (
  <BookmarkIcon
    width={20}
    height={20}
    color={focused ? light.primaryText : light.placeholder}
  />
);
const Tab = createBottomTabNavigator<TabsParamList>();

const TabNavigation = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: light.primary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins',
        },
        tabBarActiveTintColor: light.primaryText, // Color when the tab is active
        tabBarInactiveTintColor: light.placeholder, // Color when the tab is inactive
      }}>
      <Tab.Screen
        name={ScreenNames.BOOKS}
        component={BooksScreen}
        options={{
          title: t(TranslationKeys.books),
          headerShown: true,
          headerStyle: {
            backgroundColor: light.primary,
          },
          headerTintColor: light.primaryText,
          headerTitleAlign: 'center',
          headerTitle: t(TranslationKeys.potterPages),
          tabBarIcon: bookTabIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.FAVORITES}
        component={FavoritesScreen}
        options={{
          title: t(TranslationKeys.favorites),
          headerShown: true,
          headerStyle: {
            backgroundColor: light.primary,
          },
          headerTintColor: light.primaryText,
          headerTitleAlign: 'center',
          headerTitle: t(TranslationKeys.favorites),
          tabBarIcon: bookmarkTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
