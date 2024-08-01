import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsParamList} from './types';
import BooksScreen from '../screens/BooksScreen';
import BookmarkIcon from '../assets/Bookmark';
import BookIcon from '../assets/Book';
import {light} from '../fixtures/colors.json';
import FavoritesScreen from '../screens/FavoritesScreen';

const bookTabIcon = ({focused}: {focused: boolean}) => (
  <BookIcon width={20} height={20} color={focused ? 'white' : 'gray'} />
);

const bookmarkTabIcon = ({focused}: {focused: boolean}) => (
  <BookmarkIcon width={20} height={20} color={focused ? 'white' : 'gray'} />
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
          color: 'white',
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
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: 'Potter Pages',
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
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: 'Favorites',
          tabBarIcon: bookmarkTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
