import React from 'react';
// navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screens
import BooksScreen from '../screens/BooksScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
// fixtures
import {en} from '../fixtures/langs.json';
// styles
import BookmarkIcon from '../assets/Bookmark';
import BookIcon from '../assets/Book';
import {light} from '../fixtures/colors.json';
// types
import {TabsParamList} from '../types/navigation';

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
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: light.primary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: light.primaryText,
        },
      }}>
      <Tab.Screen
        name="books"
        component={BooksScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: light.primary,
          },
          headerTintColor: light.primaryText,
          headerTitleAlign: 'center',
          headerTitle: en.potterPages,
          tabBarIcon: bookTabIcon,
        }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: light.primary,
          },
          headerTintColor: light.primaryText,
          headerTitleAlign: 'center',
          headerTitle: en.favorites,
          tabBarIcon: bookmarkTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
